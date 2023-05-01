import Notifier from './notifier';
import NotifierFactory from './notifierFactory';

function run() {
  const sms_notifier: Notifier = NotifierFactory.getNotifier('SMS');
  sms_notifier.send('greetings from the factory pattern!');

  const email_notifier: Notifier = NotifierFactory.getNotifier('Email');
  email_notifier.send('greetings from the factory pattern!');

  const push_notifier: Notifier = NotifierFactory.getNotifier('Push');
  push_notifier.send('greetings from the factory pattern!');
}
