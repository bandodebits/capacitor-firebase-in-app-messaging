export interface CapacitorFirebaseInAppMessagingPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
