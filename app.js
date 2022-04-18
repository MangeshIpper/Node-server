require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

_startServer();

async function _startServer() {
    app.use(cors());
    app.use(bodyParser.json({
        limit: '100mb'
    }));
    app.use(bodyParser.urlencoded({
        limit: '100mb',
        extended: true
    }));
    app.use('/', routes);
    try {
        mongoose.Promise = bluebird;
        await mongoose.connect("mongodb://localhost:27017/MeanApp", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('[MongoDb] successfully connected to MongoDb');
        await http.createServer(app).listen(3000, "0.0.0.0");
        console.log('[Express] listening on port 3000');
    } catch (e) {
        console.log(e);
    }
}
