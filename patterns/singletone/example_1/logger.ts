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
