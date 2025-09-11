/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'

// Google Maps type declarations
declare global {
  interface Window {
    google: {
      maps: {
        Map: any
        Marker: any
        InfoWindow: any
        Polyline: any
        LatLngBounds: any
        SymbolPath: {
          CIRCLE: any
        }
        MapTypeId: {
          ROADMAP: any
        }
      }
    }
  }
}

interface Location {
  id: string
  timestamp: string
  latitude: number
  longitude: number
  accuracy: number
  altitude: number
  speed: number
  heading: number
  deviceId: string
  place: string
}

interface MapComponentProps {
  locations: Location[]
}

function MapComponent({ locations }: MapComponentProps) {
  useEffect(() => {
    if (typeof window === 'undefined' || !locations.length || !window.google) return

    // Initialize Google Map
    const map = new window.google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 13,
      center: { lat: locations[0].latitude, lng: locations[0].longitude },
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    })

    // Add markers for each location
    locations.forEach((location, index) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
        map: map,
        title: `Location ${index + 1}: ${new Date(location.timestamp).toLocaleString()}`,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 6,
          fillColor: index === 0 ? '#4285f4' : '#ea4335', // Blue for latest, red for others
          fillOpacity: 0.8,
          strokeWeight: 1,
          strokeColor: '#fff'
        }
      })

      // Info window with location details
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="font-family: system-ui, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1a73e8;">${location.place}</h3>
            <p style="margin: 2px 0;"><strong>Time:</strong> ${new Date(location.timestamp).toLocaleString()}</p>
            <p style="margin: 2px 0;"><strong>Coordinates:</strong> ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}</p>
            <p style="margin: 2px 0;"><strong>Accuracy:</strong> ${location.accuracy.toFixed(1)}m</p>
            <p style="margin: 2px 0;"><strong>Speed:</strong> ${location.speed > 0 ? `${(location.speed * 2.237).toFixed(1)} mph` : '0 mph'}</p>
            <p style="margin: 2px 0;"><strong>Heading:</strong> ${location.heading.toFixed(0)}°</p>
            <p style="margin: 2px 0;"><strong>Altitude:</strong> ${location.altitude.toFixed(1)}m</p>
          </div>
        `
      })

      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })
    })

    // Create path connecting all locations
    if (locations.length > 1) {
      const path = locations.map(loc => ({ lat: loc.latitude, lng: loc.longitude }))
      
      new window.google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#4285f4',
        strokeOpacity: 0.6,
        strokeWeight: 3,
        map: map
      })
    }

    // Fit map to show all locations
    if (locations.length > 1) {
      const bounds = new window.google.maps.LatLngBounds()
      locations.forEach(location => {
        bounds.extend({ lat: location.latitude, lng: location.longitude })
      })
      map.fitBounds(bounds)
    }
  }, [locations])

  return (
    <div 
      id="map" 
      className="w-full h-96 rounded-lg border border-gray-300"
      style={{ minHeight: '400px' }}
    />
  )
}

export default function LocationsPage() {
  const [locations, setLocations] = useState<Location[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('/api/location')
        const data = await response.json()
        
        if (data.success) {
          setLocations(data.locations)
        } else {
          setError('Failed to fetch locations')
        }
      } catch {
        setError('Error loading locations')
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading locations...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=geometry`}
        async
        defer
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">📍 Location Tracking</h1>
            <p className="text-gray-600">
              Showing {locations.length} location{locations.length !== 1 ? 's' : ''} from Sonder app
            </p>
          </div>

          {locations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No locations recorded yet</p>
              <p className="text-gray-400 text-sm mt-2">Start tracking with the Sonder app to see your locations here</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <MapComponent locations={locations} />
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Recent Locations</h2>
                <div className="overflow-hidden bg-white shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Place
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Coordinates
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Speed
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Accuracy
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {locations.slice(0, 20).map((location, index) => (
                        <tr key={location.id} className={index === 0 ? 'bg-blue-50' : ''}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(location.timestamp).toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {location.place}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {location.speed > 0 ? `${(location.speed * 2.237).toFixed(1)} mph` : '0 mph'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {location.accuracy.toFixed(1)}m
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {locations.length > 20 && (
                  <p className="text-sm text-gray-500 text-center">
                    Showing 20 most recent locations out of {locations.length} total
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}