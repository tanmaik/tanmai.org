'use client'

import { useState, useEffect } from 'react'

interface Photo {
  id: string
  timestamp: string
  location: {
    latitude: number
    longitude: number
  }
  deviceId: string
  size: number
  contentType: string
  hasData: boolean
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch('/api/photo')
        const data = await response.json()
        
        if (data.success) {
          setPhotos(data.photos)
        } else {
          setError('Failed to fetch photos')
        }
      } catch {
        setError('Error loading photos')
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
    // Refresh every 30 seconds
    const interval = setInterval(fetchPhotos, 30000)
    return () => clearInterval(interval)
  }, [])

  async function loadFullPhoto(photoId: string) {
    try {
      const response = await fetch(`/api/photo/${photoId}`)
      const data = await response.json()
      
      if (data.success && data.photo) {
        setSelectedPhoto(data.photo.data)
      }
    } catch {
      console.error('Failed to load full photo')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading photos...</p>
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
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">📸 Photo Stream</h1>
            <p className="text-gray-600">
              {photos.length} photo{photos.length !== 1 ? 's' : ''} captured from Sonder app
            </p>
          </div>

          {photos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos uploaded yet</p>
              <p className="text-gray-400 text-sm mt-2">Take photos with your iPhone to see them here</p>
            </div>
          ) : (
            <>
              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {photos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => loadFullPhoto(photo.id)}
                  >
                    {/* Photo Placeholder */}
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    {/* Photo Info */}
                    <div className="p-4">
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(photo.timestamp).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-gray-600">
                        {new Date(photo.timestamp).toLocaleTimeString()}
                      </p>
                      {photo.location.latitude !== 0 && (
                        <p className="text-xs text-blue-600 mt-1">
                          📍 {photo.location.latitude.toFixed(4)}, {photo.location.longitude.toFixed(4)}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        {(photo.size / 1024).toFixed(0)} KB
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo Details Table */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Photo Details</h2>
                <div className="overflow-hidden bg-white shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Device
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {photos.slice(0, 10).map((photo, index) => (
                        <tr key={photo.id} className={index === 0 ? 'bg-blue-50' : ''}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(photo.timestamp).toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {photo.location.latitude !== 0 
                              ? `${photo.location.latitude.toFixed(6)}, ${photo.location.longitude.toFixed(6)}`
                              : 'No location'
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {(photo.size / 1024).toFixed(1)} KB
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono text-xs">
                            {photo.deviceId.substring(0, 8)}...
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {photos.length > 10 && (
                  <p className="text-sm text-gray-500 text-center">
                    Showing 10 most recent photos out of {photos.length} total
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Full Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`data:image/jpeg;base64,${selectedPhoto}`} 
              alt="Full size photo"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}