'use strict';

const dbConnect = require('./../../config/db.config');

const Vehicle = function(vehicle) {
    this.vehicle_id = vehicle.vehicle_id
};

Vehicle.getLogs = (result) => {
    const getlogsSql = 'SELECT * FROM vehiclelogs';
    dbConnect.query(getlogsSql, (err, data) => {
        if (err) {
            result(err, null);
        } else {
            result(null, data);
        }
    });
};

Vehicle.entryLog = (vehicle, result) => {
    const entryLogSql = `CALL vehicle_entry('${vehicle.vehicle_id}')`;
    dbConnect.query(entryLogSql, (err, data) => {
        if (err) {
            result(err, null);
        } else {
            result(null, data);
        }
    });
};


module.exports= Vehicle;