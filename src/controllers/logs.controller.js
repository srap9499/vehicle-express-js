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

exports.entryLog = (req, res) => {
    Vehicle.entryLog(new Vehicle(req.body), (err, logged) => {
        if (err) {
            console.log(err);
            if (err.errno == 3819) {
                res.status(400).send('Vehicle plate number provided is too small!');
            } else if (err.errno == 1406) {
                res.status(400).send('Vehicle plate number provided is too long!');
            } else {
                res.status(500).send();
            }
        } else {
            res.status(200).send('Entry log successful!');
        }
    });
};

exports.exitLog = (req, res) => {
    Vehicle.exitLog(new Vehicle(req.body), (err, logged) => {
        if (err) {
            console.log(err);
            if (err.errno == 3819) {
                res.status(400).send('Vehicle plate number provided is too small!');
            } else if (err.errno == 1406) {
                res.status(400).send('Vehicle plate number provided is too long!');
            } else {
                res.status(500).send();
            }
        } else {
            res.status(200).send('Exit log successful!');
        }
    });
};