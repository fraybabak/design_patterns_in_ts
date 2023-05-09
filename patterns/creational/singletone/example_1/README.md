# Singleton Pattern Example: Logger

The Singleton pattern is a design pattern that restricts the instantiation of a class to a single instance. It ensures that a class has only one instance and provides a global point of access to it. This pattern is useful when a single shared resource is needed across the entire application, such as a database connection or a logger.

In this example, we have implemented a simple Logger class that logs messages to a file named `app.log`. The Logger class is designed as a Singleton to ensure that there is only one instance managing the log file throughout the application.

## Logger.ts

The `Logger.ts` file contains the Logger class, which has a private `logFilePath` property to store the path of the log file. The class provides a `log()` method to append messages to the log file. We create a Singleton instance of the Logger class and export it as the module's default export.

```typescript
import fs from 'fs';
import path from 'path';

class Logger {
  private logFilePath: string;

  constructor() {
    this.logFilePath = path.resolve(__dirname, 'app.log');
  }

  async log(message: string): Promise<void> {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    return new Promise((resolve, reject) => {
      fs.appendFile(this.logFilePath, logMessage, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

// Create a Singleton instance
const singletonInstance = new Logger();

// Export the Singleton instance
export default singletonInstance;
```
