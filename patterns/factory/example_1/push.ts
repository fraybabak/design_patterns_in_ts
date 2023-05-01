import Notifier from './notifier';

export default class PushNotifier implements Notifier {
  public send(message: string): void {
    console.log(`PushNotifier: ${message} sent!`);
  }
}
