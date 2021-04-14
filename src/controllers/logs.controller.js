'use strict';

const Vehicle = require('./../models/logs.model');

exports.getLogs = (req, res) => {
    Vehicle.getLogs((err, logs) => {
        if (err) {
            res.status(500).send();
        } else {
            res.status(200).send({"Vehicle log data": logs});
        }
    });
};