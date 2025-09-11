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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: photoId } = await params
    const client = await getRedisClient()
    const photos = await client.lRange('photos', 0, -1)
    
    for (const photoStr of photos) {
      const photo = JSON.parse(photoStr)
      if (photo.id === photoId) {
        return NextResponse.json({
          success: true,
          photo: photo
        })
      }
    }
    
    return NextResponse.json(
      { success: false, error: 'Photo not found' },
      { status: 404 }
    )
  } catch (error) {
    console.error('❌ Error fetching photo:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch photo' },
      { status: 500 }
    )
  }
}