import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const locationData = {
      timestamp: new Date().toISOString(),
      latitude: body.latitude,
      longitude: body.longitude,
      accuracy: body.accuracy,
      altitude: body.altitude,
      speed: body.speed,
      heading: body.heading,
      deviceId: body.deviceId,
    }

    // Log the location data for now
    console.log('📍 Location ping received:', JSON.stringify(locationData, null, 2))
    
    return NextResponse.json({ 
      success: true, 
      message: 'Location data received',
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
  return NextResponse.json({ 
    message: 'Location tracking endpoint ready',
    timestamp: new Date().toISOString()
  })
}