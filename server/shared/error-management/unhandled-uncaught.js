const ErrorManager = require('./error-manager');

process.on('unhandledRejection', (reason) => {
  throw reason;
});

process.on('uncaughtException', (error) => {
  ErrorManager.handleError(error);
});
