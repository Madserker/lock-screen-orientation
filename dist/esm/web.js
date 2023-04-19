import { WebPlugin } from '@capacitor/core';
export class LockScreenOrientationWeb extends WebPlugin {
    lockOrientationToLandscape() {
        return this.lockOrientationToLandscape();
    }
    lockOrientationToPortrait() {
        return this.lockOrientationToPortrait();
    }
    unlockOrientation() {
        return this.unlockOrientation();
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map