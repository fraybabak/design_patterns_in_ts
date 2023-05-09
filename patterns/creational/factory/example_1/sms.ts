import Notifier from './notifier';

export default class SMSNotifier implements Notifier {
  public send(message: string): void {
    console.log(`SMS: ${message} sent!`);
  }
}
