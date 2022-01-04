const express = require('express');
const app = express()


require('./boostraps/consumer')();

module.exports = app;