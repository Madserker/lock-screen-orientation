import { registerPlugin } from '@capacitor/core';

import type { LockScreenOrientationPlugin } from './definitions';

const LockScreenOrientation = registerPlugin<LockScreenOrientationPlugin>(
  'LockScreenOrientation',
  {
    web: () => import('./web').then(m => new m.LockScreenOrientationWeb()),
  },
);

export * from './definitions';
export { LockScreenOrientation };
