import Foundation

@objc public class LockScreenOrientation: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }

    @objc func lockOrientationToLandscape() {
        UIDevice.current.setValue(UIInterfaceOrientation.landscapeRight.rawValue, forKey: "orientation")
        UINavigationController.attemptRotationToDeviceOrientation()
    }
    
    // Método para bloquear la orientación en modo retrato
    static func lockOrientationToPortrait() {
        UIDevice.current.setValue(UIInterfaceOrientation.portrait.rawValue, forKey: "orientation")
        UINavigationController.attemptRotationToDeviceOrientation()
    }
    
    // Método para desbloquear la orientación
    static func unlockOrientation() {
        UIDevice.current.setValue(UIInterfaceOrientation.unknown.rawValue, forKey: "orientation")
        UINavigationController.attemptRotationToDeviceOrientation()
    }
}
