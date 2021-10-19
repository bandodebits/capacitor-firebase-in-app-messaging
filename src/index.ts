import { registerPlugin } from '@capacitor/core';

import type { CapacitorFirebaseInAppMessagingPlugin } from './definitions';

const CapacitorFirebaseInAppMessaging = registerPlugin<CapacitorFirebaseInAppMessagingPlugin>('CapacitorFirebaseInAppMessaging', {
  web: () => import('./web').then(m => new m.CapacitorFirebaseInAppMessagingWeb()),
});

export * from './definitions';
export { CapacitorFirebaseInAppMessaging };
