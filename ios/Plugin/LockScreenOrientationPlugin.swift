import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(LockScreenOrientationPlugin)
public class LockScreenOrientationPlugin: CAPPlugin {
    private let implementation = LockScreenOrientation()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func lockOrientationToLandscape(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve()
    }

    @objc func lockOrientationToPortrait(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve()
    }

    @objc func unlockOrientation(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve()
    }
}
