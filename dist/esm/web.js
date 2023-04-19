import { WebPlugin } from '@capacitor/core';
export class LockScreenOrientationWeb extends WebPlugin {
    lockOrientationToLandscape() {
        throw new Error('Method not implemented.');
    }
    lockOrientationToPortrait() {
        throw new Error('Method not implemented.');
    }
    unlockOrientation() {
        throw new Error('Method not implemented.');
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map