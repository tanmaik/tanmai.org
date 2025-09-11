'use client'

import { useState, useEffect } from 'react'

interface LocationEvent {
  id: string
  timestamp: string
  latitude: number
  longitude: number
  accuracy: number
  altitude: number
  speed: number
  heading: number
  deviceId: string
  place?: string
  source?: string
  visitType?: string
  arrivalDate?: string
  departureDate?: string
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
  deviceId: string
  receivedAt: string
  eventTime: string
  source?: string
}

interface PhotoEvent {
  id: string
  timestamp: string
  location: {
    latitude: number
    longitude: number
  }
  deviceId: string
  size: number
  blobUrl: string
  contentType: string
  source?: string
}


type CombinedEvent = {
  type: 'location' | 'health' | 'photo'
  timestamp: string
  data: LocationEvent | HealthEvent | PhotoEvent
}

export default function MePage() {
  const [events, setEvents] = useState<CombinedEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<string>('')

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/firehose')
      const data = await response.json()
      
      if (data.success) {
        // Combine all events and sort by timestamp
        const combinedEvents: CombinedEvent[] = [
          ...data.recentData.locations.map((loc: LocationEvent) => ({
            type: 'location' as const,
            timestamp: loc.timestamp,
            data: loc
          })),
          ...data.recentData.healthEvents.map((health: HealthEvent) => ({
            type: 'health' as const,
            timestamp: health.eventTime,
            data: health
          })),
          ...data.recentData.photos.map((photo: PhotoEvent) => ({
            type: 'photo' as const,
            timestamp: photo.timestamp,
            data: photo
          }))
        ]

        // Sort by timestamp (newest first)
        combinedEvents.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        
        setEvents(combinedEvents)
        setLastUpdate(new Date().toLocaleTimeString())
      }
    } catch (error) {
      console.error('Failed to fetch events:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
    
    // Poll for updates every 5 seconds
    const interval = setInterval(fetchEvents, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString()
  }


  const renderLocationEvent = (event: LocationEvent) => (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-blue-600 font-medium">📍 Location Update</span>
          {event.visitType && (
            <span className="ml-2 text-purple-600 font-medium">🏠 Visit</span>
          )}
        </div>
        <span className="text-gray-500 text-sm">{formatTime(event.timestamp)}</span>
      </div>
      <div className="mt-1 text-sm text-gray-700">
        <div>Lat: {event.latitude.toFixed(6)}, Lng: {event.longitude.toFixed(6)}</div>
        <div>Accuracy: ±{event.accuracy.toFixed(1)}m</div>
        {event.place && <div>📍 {event.place}</div>}
        {event.speed > 0 && <div>Speed: {(event.speed * 2.237).toFixed(1)} mph</div>}
        {event.source && <div className="text-gray-500">Source: {event.source}</div>}
      </div>
    </div>
  )

  const renderHealthEvent = (event: HealthEvent) => (
    <div className="bg-red-50 border-l-4 border-red-400 p-3">
      <div className="flex justify-between items-start">
        <span className="text-red-600 font-medium">❤️ Health Event</span>
        <span className="text-gray-500 text-sm">{formatTime(event.eventTime)}</span>
      </div>
      <div className="mt-1 text-sm text-gray-700">
        <div className="font-medium">{event.type}</div>
        {event.value && <div>Value: {event.value}</div>}
        {event.activityType && <div>Activity: {event.activityType}</div>}
        {event.duration && <div>Duration: {(event.duration / 60).toFixed(1)} min</div>}
        {event.calories && <div>Calories: {event.calories}</div>}
        {event.distance && <div>Distance: {(event.distance * 3.28084).toFixed(1)} ft</div>}
        {event.source && <div className="text-gray-500">Source: {event.source}</div>}
      </div>
    </div>
  )

  const renderPhotoEvent = (event: PhotoEvent) => (
    <div className="bg-green-50 border-l-4 border-green-400 p-3">
      <div className="flex justify-between items-start">
        <span className="text-green-600 font-medium">📸 Photo Upload</span>
        <span className="text-gray-500 text-sm">{formatTime(event.timestamp)}</span>
      </div>
      <div className="mt-1 text-sm text-gray-700">
        <div>Size: {(event.size / 1024).toFixed(1)} KB</div>
        <div>Location: {event.location.latitude.toFixed(6)}, {event.location.longitude.toFixed(6)}</div>
        {event.source && <div className="text-gray-500">Source: {event.source}</div>}
        <div className="mt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={event.blobUrl} 
            alt="Uploaded photo"
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading events...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Event Feed</h1>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Real-time updates from Sonder app</span>
            <span>Last updated: {lastUpdate}</span>
          </div>
        </div>

        <div className="space-y-4">
          {events.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
              No events yet. Start tracking with the Sonder app!
            </div>
          ) : (
            events.map((event, index) => (
              <div key={`${event.type}-${index}`} className="bg-white rounded-lg shadow-sm overflow-hidden">
                {event.type === 'location' && renderLocationEvent(event.data as LocationEvent)}
                {event.type === 'health' && renderHealthEvent(event.data as HealthEvent)}
                {event.type === 'photo' && renderPhotoEvent(event.data as PhotoEvent)}
              </div>
            ))
          )}
        </div>

        {events.length > 0 && (
          <div className="mt-8 text-center text-gray-500 text-sm">
            Showing {events.length} recent events
          </div>
        )}
      </div>
    </div>
  )
}