import { NextRequest, NextResponse } from 'next/server'
import { createClient, RedisClientType } from 'redis'

let redis: RedisClientType | null = null

async function getRedisClient() {
  if (!redis) {
    redis = createClient({ url: process.env.REDIS_URL })
    await redis.connect()
  }
  return redis
}

interface HealthEvent {
  type: string
  value?: number
  timestamp: number
  endTime?: number
  activityType?: string
  duration?: number
  calories?: number
  distance?: number
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { deviceId, events } = body
    
    // Process each health event
    const processedEvents = events.map((event: HealthEvent) => ({
      ...event,
      deviceId,
      receivedAt: new Date().toISOString(),
      eventTime: new Date(event.timestamp * 1000).toISOString()
    }))
    
    // Save to Redis
    const client = await getRedisClient()
    
    // Store each event in a time-series list
    for (const event of processedEvents) {
      await client.lPush('health_events', JSON.stringify(event))
    }
    
    // Keep only last 10000 events
    await client.lTrim('health_events', 0, 9999)
    
    // Also store aggregated daily stats
    const today = new Date().toISOString().split('T')[0]
    const dailyKey = `health_daily:${today}`
    
    // Update daily aggregates
    for (const event of events) {
      if (event.type === 'steps') {
        await client.hIncrByFloat(dailyKey, 'steps', event.value)
      } else if (event.type === 'distance') {
        await client.hIncrByFloat(dailyKey, 'distance', event.value)
      } else if (event.type === 'heartRate') {
        await client.hIncrByFloat(dailyKey, 'heartRateSum', event.value)
        await client.hIncrBy(dailyKey, 'heartRateCount', 1)
      } else if (event.type === 'workout') {
        await client.hIncrBy(dailyKey, 'workouts', 1)
        await client.hIncrByFloat(dailyKey, 'workoutMinutes', event.duration / 60)
        await client.hIncrByFloat(dailyKey, 'calories', event.calories)
      }
    }
    
    // Set expiry for daily stats (30 days)
    await client.expire(dailyKey, 2592000)
    
    console.log(`💓 Health data saved: ${events.length} events from ${deviceId}`)
    console.log('Events:', events.map((e: HealthEvent) => ({
      type: e.type,
      value: e.value,
      time: new Date(e.timestamp * 1000).toLocaleTimeString()
    })))
    
    return NextResponse.json({ 
      success: true, 
      message: 'Health data saved',
      eventsReceived: events.length
    })
  } catch (error) {
    console.error('❌ Error processing health data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process health data' },
      { status: 400 }
    )
  }
}

export async function GET() {
  try {
    const client = await getRedisClient()
    
    // Get recent health events
    const events = await client.lRange('health_events', 0, 99)
    const parsedEvents = events.map((event: string) => JSON.parse(event))
    
    // Get today's stats
    const today = new Date().toISOString().split('T')[0]
    const dailyStats = await client.hGetAll(`health_daily:${today}`)
    
    // Calculate average heart rate
    let avgHeartRate = null
    if (dailyStats.heartRateSum && dailyStats.heartRateCount) {
      avgHeartRate = parseFloat(dailyStats.heartRateSum) / parseInt(dailyStats.heartRateCount)
    }
    
    return NextResponse.json({
      success: true,
      recentEvents: parsedEvents,
      todayStats: {
        date: today,
        steps: parseFloat(dailyStats.steps || '0'),
        distance: parseFloat(dailyStats.distance || '0'),
        avgHeartRate,
        workouts: parseInt(dailyStats.workouts || '0'),
        workoutMinutes: parseFloat(dailyStats.workoutMinutes || '0'),
        calories: parseFloat(dailyStats.calories || '0')
      }
    })
  } catch (error) {
    console.error('❌ Error fetching health data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch health data' },
      { status: 500 }
    )
  }
}