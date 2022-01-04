require('express-async-errors');
const Logger = require('logger');
const config = require('../configs/config');

const loggerInstance = new Logger(
  {
    level: 'debug',
  },
);

process.on('unhandledRejection', (err) => {
  throw err;
});

module.exports = loggerInstance;