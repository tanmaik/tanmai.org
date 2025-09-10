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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const locationData = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      latitude: body.latitude,
      longitude: body.longitude,
      accuracy: body.accuracy,
      altitude: body.altitude,
      speed: body.speed,
      heading: body.heading,
      deviceId: body.deviceId,
    }

    // Save to Redis
    const client = await getRedisClient()
    await client.lPush('locations', JSON.stringify(locationData))
    
    // Keep only last 1000 locations to avoid storage issues
    await client.lTrim('locations', 0, 999)
    
    console.log('📍 Location saved to Redis:', JSON.stringify(locationData, null, 2))
    
    return NextResponse.json({ 
      success: true, 
      message: 'Location data saved',
      received: locationData 
    })
  } catch (error) {
    console.error('❌ Error processing location data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process location data' },
      { status: 400 }
    )
  }
}

export async function GET() {
  try {
    const client = await getRedisClient()
    const locations = await client.lRange('locations', 0, -1)
    const parsedLocations = locations.map((loc: string) => JSON.parse(loc))
    
    return NextResponse.json({
      success: true,
      count: parsedLocations.length,
      locations: parsedLocations
    })
  } catch (error) {
    console.error('❌ Error fetching locations:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch locations' },
      { status: 500 }
    )
  }
}