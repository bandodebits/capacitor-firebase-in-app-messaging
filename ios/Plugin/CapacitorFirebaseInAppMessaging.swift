import Foundation

@objc public class CapacitorFirebaseInAppMessaging: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
