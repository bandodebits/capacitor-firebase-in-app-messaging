import { WebPlugin } from '@capacitor/core';

import type { CapacitorFirebaseInAppMessagingPlugin } from './definitions';

export class CapacitorFirebaseInAppMessagingWeb extends WebPlugin implements CapacitorFirebaseInAppMessagingPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
