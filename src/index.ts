import { registerPlugin } from '@capacitor/core';

import type { AppLanguagePlugin } from './definitions.js';

export * from './definitions.js';

export const AppLanguage = registerPlugin<AppLanguagePlugin>('AppLanguage', {
  web: () => import('./web.js').then((m) => new m.AppLanguageWeb()),
});
