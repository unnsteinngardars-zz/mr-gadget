const statusCodes = require('../../constants/status-codes');
const commonErrors = require('../../constants/common-errors');

module.exports = {
  invalidObjectId: {
    commonType: commonErrors.HTTP_ERROR,
    description: 'ObjectId is not valid, ObjectId\'s are usually 24-character long hexadecimal strings',
    isOperational: true,
    statusCode: statusCodes.BAD_REQUEST,
  },
};
