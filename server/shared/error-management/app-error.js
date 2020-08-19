class AppError extends Error {
  constructor({
    commonType, description, isOperational, statusCode,
  }) {
    super();
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
