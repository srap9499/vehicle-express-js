'use strict';

const express = require('express');

// Express app
const app = express();

// Server Port
const port = process.env.PORT | 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello!');
});

const vehicleLogsRouter = require('./src/routes/logs.routes');

app.use('/logs', vehicleLogsRouter);

app.listen(port, () => {
    console.log(`Server started on port number: ${port}`);
});