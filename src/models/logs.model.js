'use strict';

const dbConnect = require('./../../config/db.config');

const Vehicle = (vehicle) => {
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


module.exports= Vehicle;