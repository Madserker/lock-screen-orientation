'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const LockScreenOrientation = core.registerPlugin('LockScreenOrientation', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.LockScreenOrientationWeb()),
});

class LockScreenOrientationWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LockScreenOrientationWeb: LockScreenOrientationWeb
});

exports.LockScreenOrientation = LockScreenOrientation;
//# sourceMappingURL=plugin.cjs.js.map
