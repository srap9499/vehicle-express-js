'use strict';

const express = require('express');
const Vehicle = require('../models/logs.model');
const router = express.Router();

const vehicleLogsController = require('./../controllers/logs.controller');

// GET logs
router.get('/', vehicleLogsController.getLogs);

// Vehicle entry log
router.post('/entry', vehicleLogsController.entryLog);

// Vehicle exit log
router.post('/exit', vehicleLogsController.exitLog);

module.exports = router;