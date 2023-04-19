var capacitorLockScreenOrientation = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
