# Factory Method Pattern Example: Notifier

The Factory Method pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. The pattern is useful when the object creation process should be centralized and decoupled from the classes that use the objects.

In this example, we have implemented a simple Notifier interface that sends messages via different channels (SMS, Email, and Push). The NotifierFactory class is responsible for creating instances of Notifier implementations based on the provided input string.

## Notifier.ts

The `Notifier.ts` file contains the Notifier interface and its concrete implementations for SMS, Email, and Push notifications.

```typescript
export default interface Notifier {
  send(message: string): void;
}

export default class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`SMS: ${message}`);
  }
}

export default class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Email: ${message}`);
  }
}

export default class PushNotifier implements Notifier {
  send(message: string): void {
    console.log(`Push: ${message}`);
  }
}
```

## NotifierFactory.ts

The `NotifierFactory.ts` file contains the NotifierFactory class, which is responsible for creating instances of the Notifier interface based on the provided notifierType string.

```typescript
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
```

## app.ts

The `app.ts` file contains the application code that uses the NotifierFactory class to create instances of the Notifier interface.

```typescript
import Notifier from './notifier';
import NotifierFactory from './notifierFactory';

function run() {
  const sms_notifier: Notifier = NotifierFactory.getNotifier('SMS');
  sms_notifier.send('this message is sent via SMS');

  const email_notifier: Notifier = NotifierFactory.getNotifier('Email');
  email_notifier.send('this message is sent via Email');

  const push_notifier: Notifier = NotifierFactory.getNotifier('Push');
  push_notifier.send('this message is sent via Push');
}
```

## usage

```bash
$ npm run build && node dist/app.js

```
