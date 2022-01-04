const express = require("express");

const router = express.Router();
const service1Controller = require('../controllers/service1');

router.get('/test', service1Controller.service1Test);