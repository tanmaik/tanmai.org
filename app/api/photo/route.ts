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
    const formData = await request.formData()
    
    const photoFile = formData.get('photo') as File
    const metadataStr = formData.get('metadata') as string
    
    if (!photoFile || !metadataStr) {
      return NextResponse.json(
        { success: false, error: 'Missing photo or metadata' },
        { status: 400 }
      )
    }
    
    const metadata = JSON.parse(metadataStr)
    
    // Convert photo to base64 for storage
    const photoBytes = await photoFile.arrayBuffer()
    const photoBase64 = Buffer.from(photoBytes).toString('base64')
    
    const photoData = {
      id: `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(metadata.timestamp * 1000).toISOString(),
      location: metadata.location,
      deviceId: metadata.deviceId,
      size: metadata.size,
      data: photoBase64,
      contentType: photoFile.type
    }
    
    // Save to Redis
    const client = await getRedisClient()
    await client.lPush('photos', JSON.stringify(photoData))
    
    // Keep only last 100 photos to avoid storage issues
    await client.lTrim('photos', 0, 99)
    
    console.log('📸 Photo saved to Redis:', {
      id: photoData.id,
      timestamp: photoData.timestamp,
      size: photoData.size,
      location: photoData.location
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Photo uploaded successfully',
      photoId: photoData.id
    })
  } catch (error) {
    console.error('❌ Error processing photo:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process photo' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const client = await getRedisClient()
    const photos = await client.lRange('photos', 0, -1)
    const parsedPhotos = photos.map((photo: string) => {
      const photoData = JSON.parse(photo)
      // Don't send the full base64 data in the list, just metadata
      const { data, ...metadata } = photoData
      return {
        ...metadata,
        hasData: !!data
      }
    })
    
    return NextResponse.json({
      success: true,
      count: parsedPhotos.length,
      photos: parsedPhotos
    })
  } catch (error) {
    console.error('❌ Error fetching photos:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch photos' },
      { status: 500 }
    )
  }
}