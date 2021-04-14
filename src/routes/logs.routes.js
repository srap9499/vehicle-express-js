'use strict';

const express = require('express');
const router = express.Router();

const vehicleLogsController = require('./../controllers/logs.controller');

// GET logs
router.get('/', vehicleLogsController.getLogs);

module.exports = router;