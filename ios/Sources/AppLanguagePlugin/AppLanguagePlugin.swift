import Capacitor
import Foundation

/// Writes the in-app language choice to the app's iOS language (Settings → App →
/// Language). AppleLanguages is read at launch, so system UI such as
/// PKAddPassButton follows it from the next launch.
/// CAPBridgedPlugin registration works on Capacitor 6, 7 and 8.
@objc(AppLanguagePlugin)
public class AppLanguagePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "AppLanguagePlugin"
    public let jsName = "AppLanguage"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "set", returnType: CAPPluginReturnPromise)
    ]

    /// `code` is an iOS language identifier ("vi", "zh-Hans"); none = follow the device.
    @objc func set(_ call: CAPPluginCall) {
        if let code = call.getString("code") {
            UserDefaults.standard.set([code], forKey: "AppleLanguages")
        } else {
            UserDefaults.standard.removeObject(forKey: "AppleLanguages")
        }
        call.resolve()
    }
}
