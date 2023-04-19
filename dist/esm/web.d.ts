import { WebPlugin } from '@capacitor/core';
import type { LockScreenOrientationPlugin } from './definitions';
export declare class LockScreenOrientationWeb extends WebPlugin implements LockScreenOrientationPlugin {
    lockOrientationToLandscape(): Promise<void>;
    lockOrientationToPortrait(): Promise<void>;
    unlockOrientation(): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
