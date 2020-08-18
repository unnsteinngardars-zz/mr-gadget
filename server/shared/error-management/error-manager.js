const logger = require('../logging/logger');

class ErrorManager {
  constructor(dependencies) {
    this.logger = dependencies.logger;
  }

  handleError(error) {
    this.logger.error(error);
    if (error.isOperational) {
      this.logger.error('Error is operational, exiting with status code 1');
      process.exit(1);
    }
  }
}

module.exports = new ErrorManager({ logger });
