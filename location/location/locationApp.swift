import SwiftUI

@main
struct locationApp: App {
    @StateObject private var locMgr = LocationManager.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .onAppear {
                    locMgr.start()
                }
                .onDisappear {
                    locMgr.stop()
                }
        }
    }
}
