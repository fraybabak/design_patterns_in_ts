import logger from './logger';

(async () => {
  await logger.log('Application started');
  console.log('Logged: Application started');

  setTimeout(async () => {
    await logger.log('Operation 1 completed');
    console.log('Logged: Operation 1 completed');
  }, 1000);

  setTimeout(async () => {
    await logger.log('Operation 2 completed');
    console.log('Logged: Operation 2 completed');
  }, 2000);
})();
