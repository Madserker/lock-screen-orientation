import { registerPlugin } from '@capacitor/core';
const LockScreenOrientation = registerPlugin('LockScreenOrientation', {
    web: () => import('./web').then(m => new m.LockScreenOrientationWeb()),
});
export * from './definitions';
export { LockScreenOrientation };
//# sourceMappingURL=index.js.map