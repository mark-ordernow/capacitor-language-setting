import { WebPlugin } from '@capacitor/core';

/** The web has no app-level language: nothing to set. */
export class AppLanguageWeb extends WebPlugin {
  async set(): Promise<void> {
    return;
  }
}
