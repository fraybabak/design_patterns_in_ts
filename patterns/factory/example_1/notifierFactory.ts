import EmailNotifier from './email';
import Notifier from './notifier';
import PushNotifier from './push';
import SMSNotifier from './sms';

export default class NotifierFactory {
  public static getNotifier(type: string): Notifier {
    switch (type) {
      case 'SMS':
        return new SMSNotifier();
      case 'Email':
        return new EmailNotifier();
      case 'Push':
        return new PushNotifier();
      default:
        throw new Error('Notifier type not recognized');
    }
  }
}
