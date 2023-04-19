import { WebPlugin } from '@capacitor/core';

import type { LockScreenOrientationPlugin } from './definitions';

export class LockScreenOrientationWeb
  extends WebPlugin
  implements LockScreenOrientationPlugin
{
  lockOrientationToLandscape(): Promise<void> {
    return this.lockOrientationToLandscape();
  }
  
  lockOrientationToPortrait(): Promise<void> {
    return this.lockOrientationToPortrait();
  }

  unlockOrientation(): Promise<void> {
    return this.unlockOrientation();
  }
  
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
