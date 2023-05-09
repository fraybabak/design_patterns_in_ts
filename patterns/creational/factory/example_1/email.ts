import Notifier from './notifier';

export default class EmailNotifier implements Notifier {
  public send(message: string): void {
    console.log(`Email: ${message} sent!`);
  }
}
