export interface LockScreenOrientationPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    lockOrientationToLandscape(): Promise<void>;
    lockOrientationToPortrait(): Promise<void>;
    unlockOrientation(): Promise<void>;
}
