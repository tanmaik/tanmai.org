import { NextRequest, NextResponse } from 'next/server'
import { createClient, RedisClientType } from 'redis'
import { put } from '@vercel/blob'

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

interface LocationData {
  latitude: number
  longitude: number
  accuracy: number
  altitude: number
  speed: number
  heading: number
  deviceId: string
  timestamp: string
}

interface PhotoMetadata {
  timestamp: number
  location: {
    latitude: number
    longitude: number
  }
  deviceId: string
  size: number
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    
    // Handle multipart form data (photos or voice memos)
    if (contentType.includes('multipart/form-data')) {
      return await handleMultipartUpload(request)
    }
    
    // Handle JSON data (location or health)
    const body = await request.json()
    const dataType = detectDataType(body)
    
    switch (dataType) {
      case 'location':
        return await handleLocationData(body)
      case 'health':
        return await handleHealthData(body)
      default:
        return NextResponse.json(
          { success: false, error: 'Unknown data type', received: body },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('❌ Firehose error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process data' },
      { status: 500 }
    )
  }
}

function detectDataType(body: unknown): 'location' | 'health' | 'unknown' {
  // Type guard to check if body is an object
  if (typeof body !== 'object' || body === null) {
    return 'unknown'
  }
  
  const obj = body as Record<string, unknown>
  
  // Check for location data
  if (obj.latitude !== undefined && obj.longitude !== undefined) {
    return 'location'
  }
  
  // Check for health data
  if (obj.events && Array.isArray(obj.events)) {
    return 'health'
  }
  
  return 'unknown'
}

async function handleLocationData(body: LocationData) {
  console.log('📍 Processing location data via firehose')
  
  // Get place name from Google Places API
  let placeName = 'Unknown location'
  try {
    const placesUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${body.latitude},${body.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const placesResponse = await fetch(placesUrl)
    const placesData = await placesResponse.json()
    
    if (placesData.results && placesData.results.length > 0) {
      placeName = placesData.results[0].formatted_address
    }
  } catch (placeError) {
    console.warn('Failed to get place name:', placeError)
  }
  
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
    place: placeName,
    source: 'firehose'
  }

  // Save to Redis
  const client = await getRedisClient()
  await client.lPush('locations', JSON.stringify(locationData))
  await client.lTrim('locations', 0, 999) // Keep only last 1000
  
  console.log('📍 Location saved via firehose:', JSON.stringify(locationData, null, 2))
  
  return NextResponse.json({ 
    success: true, 
    message: 'Location data saved via firehose',
    dataType: 'location',
    received: locationData 
  })
}

async function handleHealthData(body: { deviceId: string, events: HealthEvent[] }) {
  console.log('💓 Processing health data via firehose')
  
  const { deviceId, events } = body
  
  // Process each health event
  const processedEvents = events.map((event: HealthEvent) => ({
    ...event,
    deviceId,
    receivedAt: new Date().toISOString(),
    eventTime: new Date(event.timestamp * 1000).toISOString(),
    source: 'firehose'
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
      await client.hIncrByFloat(dailyKey, 'steps', event.value || 0)
    } else if (event.type === 'distance') {
      await client.hIncrByFloat(dailyKey, 'distance', event.value || 0)
    } else if (event.type === 'heartRate') {
      await client.hIncrByFloat(dailyKey, 'heartRateSum', event.value || 0)
      await client.hIncrBy(dailyKey, 'heartRateCount', 1)
    } else if (event.type === 'workout') {
      await client.hIncrBy(dailyKey, 'workouts', 1)
      await client.hIncrByFloat(dailyKey, 'workoutMinutes', (event.duration || 0) / 60)
      await client.hIncrByFloat(dailyKey, 'calories', event.calories || 0)
    }
  }
  
  // Set expiry for daily stats (30 days)
  await client.expire(dailyKey, 2592000)
  
  console.log(`💓 Health data saved via firehose: ${events.length} events from ${deviceId}`)
  console.log('Events:', events.map((e: HealthEvent) => ({
    type: e.type,
    value: e.value,
    time: new Date(e.timestamp * 1000).toLocaleTimeString()
  })))
  
  return NextResponse.json({ 
    success: true, 
    message: 'Health data saved via firehose',
    dataType: 'health',
    eventsReceived: events.length
  })
}

async function handleMultipartUpload(request: NextRequest) {
  const formData = await request.formData()
  
  const photoFile = formData.get('photo') as File
  const voiceMemoFile = formData.get('voicememo') as File
  const metadataStr = formData.get('metadata') as string
  
  if (photoFile && metadataStr) {
    return await handlePhotoUpload(photoFile, metadataStr)
  } else if (voiceMemoFile && metadataStr) {
    return await handleVoiceMemoUpload(voiceMemoFile, metadataStr)
  } else {
    return NextResponse.json(
      { success: false, error: 'Missing file or metadata' },
      { status: 400 }
    )
  }
}

async function handlePhotoUpload(photoFile: File, metadataStr: string) {
  console.log('📸 Processing photo upload via firehose')
  
  const metadata: PhotoMetadata = JSON.parse(metadataStr)
  
  // Generate unique ID for this photo
  const photoId = `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  
  // Upload photo to Vercel Blob
  const blob = await put(`sonder/photos/${photoId}.jpg`, photoFile, {
    access: 'public',
    addRandomSuffix: false
  })
  
  const photoData = {
    id: photoId,
    timestamp: new Date(metadata.timestamp * 1000).toISOString(),
    location: metadata.location,
    deviceId: metadata.deviceId,
    size: metadata.size,
    blobUrl: blob.url,
    contentType: photoFile.type,
    source: 'firehose'
  }
  
  // Save metadata to Redis (without image data)
  const client = await getRedisClient()
  await client.lPush('photos', JSON.stringify(photoData))
  await client.lTrim('photos', 0, 999) // Keep only last 1000 photos metadata
  
  console.log('📸 Photo saved via firehose:', {
    id: photoData.id,
    timestamp: photoData.timestamp,
    size: photoData.size,
    location: photoData.location,
    blobUrl: photoData.blobUrl
  })
  
  return NextResponse.json({ 
    success: true, 
    message: 'Photo uploaded successfully via firehose',
    dataType: 'photo',
    photoId: photoData.id
  })
}

async function handleVoiceMemoUpload(voiceMemoFile: File, metadataStr: string) {
  console.log('🎤 Processing voice memo upload via firehose')
  
  const metadata = JSON.parse(metadataStr)
  
  // Generate unique ID for this voice memo
  const voiceMemoId = `voicememo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  
  // Upload voice memo to Vercel Blob
  const blob = await put(`sonder/voicememos/${voiceMemoId}.m4a`, voiceMemoFile, {
    access: 'public',
    addRandomSuffix: false
  })
  
  const voiceMemoData = {
    id: voiceMemoId,
    title: metadata.title || 'Voice Memo',
    duration: metadata.duration || 0,
    timestamp: new Date(metadata.dateAdded * 1000).toISOString(),
    deviceId: metadata.deviceId,
    size: metadata.size,
    blobUrl: blob.url,
    contentType: voiceMemoFile.type,
    artist: metadata.artist || '',
    album: metadata.album || 'Voice Memos',
    source: 'firehose'
  }
  
  // Save metadata to Redis
  const client = await getRedisClient()
  await client.lPush('voicememos', JSON.stringify(voiceMemoData))
  await client.lTrim('voicememos', 0, 999) // Keep only last 1000 voice memos
  
  console.log('🎤 Voice memo saved via firehose:', {
    id: voiceMemoData.id,
    title: voiceMemoData.title,
    duration: voiceMemoData.duration,
    size: voiceMemoData.size,
    blobUrl: voiceMemoData.blobUrl
  })
  
  return NextResponse.json({ 
    success: true, 
    message: 'Voice memo uploaded successfully via firehose',
    dataType: 'voicememo',
    voiceMemoId: voiceMemoData.id
  })
}

export async function GET() {
  try {
    const client = await getRedisClient()
    
    // Get recent data from all types
    const [locations, healthEvents, photos, voiceMemos] = await Promise.all([
      client.lRange('locations', 0, 9),
      client.lRange('health_events', 0, 9),
      client.lRange('photos', 0, 9),
      client.lRange('voicememos', 0, 9)
    ])
    
    // Get today's health stats
    const today = new Date().toISOString().split('T')[0]
    const dailyStats = await client.hGetAll(`health_daily:${today}`)
    
    // Calculate average heart rate
    let avgHeartRate = null
    if (dailyStats.heartRateSum && dailyStats.heartRateCount) {
      avgHeartRate = parseFloat(dailyStats.heartRateSum) / parseInt(dailyStats.heartRateCount)
    }
    
    const parsedLocations = locations.map((loc: string) => JSON.parse(loc))
    const parsedHealthEvents = healthEvents.map((event: string) => JSON.parse(event))
    const parsedPhotos = photos.map((photo: string) => JSON.parse(photo))
    const parsedVoiceMemos = voiceMemos.map((memo: string) => JSON.parse(memo))
    
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      summary: {
        locations: parsedLocations.length,
        healthEvents: parsedHealthEvents.length,
        photos: parsedPhotos.length,
        voiceMemos: parsedVoiceMemos.length
      },
      recentData: {
        locations: parsedLocations,
        healthEvents: parsedHealthEvents,
        photos: parsedPhotos,
        voiceMemos: parsedVoiceMemos
      },
      todayHealthStats: {
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
    console.error('❌ Error fetching firehose data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch firehose data' },
      { status: 500 }
    )
  }
}