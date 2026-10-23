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

- List every language you support in `CFBundleLocalizations` (Info.plist). iOS only shows Settings → App → Language, and only applies a language, when it is listed there.
- iOS reads the language at launch: the change shows in system UI from the next launch.

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
