export interface SetLanguageOptions {
  /** iOS language identifier listed in `CFBundleLocalizations` ("vi", "zh-Hans"). Omit to follow the device. */
  code?: string;
}

export interface AppLanguagePlugin {
  /**
   * iOS only (a no-op on the web). Sets the app's iOS language, the one shown in
   * Settings → App → Language. iOS reads it at launch, so system UI follows it
   * from the next launch.
   */
  set(options: SetLanguageOptions): Promise<void>;
}
