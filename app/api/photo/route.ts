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
      contentType: photoFile.type
    }
    
    // Save metadata to Redis (without image data)
    const client = await getRedisClient()
    await client.lPush('photos', JSON.stringify(photoData))
    
    // Keep only last 1000 photos metadata (no longer limited by size)
    await client.lTrim('photos', 0, 999)
    
    console.log('📸 Photo saved:', {
      id: photoData.id,
      timestamp: photoData.timestamp,
      size: photoData.size,
      location: photoData.location,
      blobUrl: photoData.blobUrl
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
      return JSON.parse(photo)
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