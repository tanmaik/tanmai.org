import Foundation
import CoreLocation

class LocationManager: NSObject, ObservableObject {
    static let shared = LocationManager()

    private let manager = CLLocationManager()
    private var lastSent: Date = .distantPast
    
    // throttle interval
    private let pingInterval: TimeInterval = 120 // seconds (2 minutes)

    private override init() {
        super.init()
        manager.delegate = self
        manager.desiredAccuracy = kCLLocationAccuracyBest
        manager.distanceFilter = kCLDistanceFilterNone
        manager.allowsBackgroundLocationUpdates = true
        manager.pausesLocationUpdatesAutomatically = false
    }

    func start() {
        manager.requestAlwaysAuthorization()
        manager.startUpdatingLocation()
    }

    func stop() {
        manager.stopUpdatingLocation()
    }

    private func post(location: CLLocation) {
        let now = Date()
        guard now.timeIntervalSince(lastSent) >= pingInterval else { return }
        lastSent = now

        // Build your URLRequest
        guard let url = URL(string: "https://tanmai.org/api/location") else { return }
        var req = URLRequest(url: url)
        req.httpMethod = "POST"
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        let payload: [String: Any] = [
            "lat": location.coordinate.latitude,
            "lng": location.coordinate.longitude,
            "timestamp": Int(now.timeIntervalSince1970)
        ]
        req.httpBody = try? JSONSerialization.data(withJSONObject: payload)

        let task = URLSession.shared.dataTask(with: req) { data, resp, err in
            if let err = err {
                print("Location upload error:", err)
            }
        }
        task.resume()
    }
}

extension LocationManager: CLLocationManagerDelegate {
    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        switch status {
        case .authorizedAlways:
            manager.startUpdatingLocation()
        case .authorizedWhenInUse:
            // iOS may still deny you background. Prompt user to switch to "Always" in Settings.
            break
        default:
            break
        }
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let loc = locations.last else { return }
        post(location: loc)
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print("Location error:", error)
    }
}
