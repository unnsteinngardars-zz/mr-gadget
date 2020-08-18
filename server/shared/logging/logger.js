require('dotenv').config();

const logger = require('pino')({
  level: process.env.NODE_ENV === 'test' ? 'silent' : process.env.LOG_LEVEL || 'debug',
  name: 'mr-gadget-server',
});

module.exports = logger;
