# @ordernow/capacitor-language

Set the iOS per-app language (Settings → App → Language) from Capacitor apps

## Why this plugin

- **One language for web and system UI.** When the user picks a language inside your app, iOS system UI (alerts, share sheets, `PKAddPassButton`, the Wallet add sheet…) follows it too.
- **Same setting as iOS Settings.** It writes the app's `AppleLanguages`, the value shown in Settings → App → Language, so both places stay in sync.
- **No native code in your app.** No custom plugin file or `CAPBridgeViewController` subclass to register it: install and call.
- **No extra dependencies.** Only `@capacitor/core` as a peer dependency.

## Compatibility

| Capacitor | iOS |
| --- | --- |
| 6.x | 13+ |
| 7.x | 14+ |
| 8.x | 15+ |

One source for all three (`peerDependencies: @capacitor/core >=6 <9`). Android is not implemented (calls reject as "not implemented"); the web implementation is a no-op.

## Install

```bash
npm install @ordernow/capacitor-language
npx cap sync
```

### iOS

Declare your app's languages in `ios/App/App/Info.plist` with these keys:

| Key | Type | Value |
| --- | --- | --- |
| `CFBundleLocalizations` | Array of strings | **Required.** Every language your app supports, as iOS language identifiers (`en`, `vi`, `zh-Hans`, `pt-BR`…), main language first. iOS only shows Settings → App → Language when it lists more than one language, and only applies a listed language. Without it, `set` has no visible effect. |
| `CFBundleDevelopmentRegion` | String | The language iOS falls back to when none of the user's languages is listed, usually your main language. Capacitor's template already has it (`en`); change it if your main language differs. |

The codes you pass to `set` must match the `CFBundleLocalizations` entries exactly: Simplified Chinese is `zh-Hans`, not `zh`. Map your web locale codes when they differ.

For example, an app in English, Vietnamese, Simplified Chinese and Korean:

```xml
<key>CFBundleDevelopmentRegion</key>
<string>en</string>
<key>CFBundleLocalizations</key>
<array>
	<string>en</string>
	<string>vi</string>
	<string>zh-Hans</string>
	<string>ko</string>
</array>
```

- **Nothing else to add.** No `.lproj` folders, no `AppDelegate` or view controller changes: `npx cap sync ios` installs the pod and registers the plugin.
- **Reading the language back:** [`@capacitor/device`](https://capacitorjs.com/docs/apis/device) `getLanguageCode()` / `getLanguageTag()` return the language set here, and the one picked in Settings.
- iOS reads the language at launch: system UI follows `set` from the next launch. When the user changes it in Settings, iOS relaunches the app.

## Usage

```ts
import { AppLanguage } from '@ordernow/capacitor-language';

await AppLanguage.set({ code: 'vi' }); // or 'zh-Hans', 'en'…
await AppLanguage.set({}); // follow the device language again
```

## API

<docgen-index>

* [`set(...)`](#set)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### set(...)

```typescript
set(options: SetLanguageOptions) => Promise<void>
```

iOS only (a no-op on the web). Sets the app's iOS language, the one shown in
Settings → App → Language. iOS reads it at launch, so system UI follows it
from the next launch.

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#setlanguageoptions">SetLanguageOptions</a></code> |

--------------------


### Interfaces


#### SetLanguageOptions

| Prop       | Type                | Description                                                                                             |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| **`code`** | <code>string</code> | iOS language identifier listed in `CFBundleLocalizations` ("vi", "zh-Hans"). Omit to follow the device. |

</docgen-api>

## Support

Made by **MinhVDV**. If this plugin saves you time, you can support its development via [PayPal](https://paypal.me/MinhVDV).
