import { describe, expect, it } from 'vitest';

import { AppLanguageWeb } from '../src/web';

describe('AppLanguageWeb', () => {
  it('set is a no-op that resolves, so callers need no platform check', async () => {
    const plugin = new AppLanguageWeb();
    await expect(plugin.set()).resolves.toBeUndefined();
  });
});
