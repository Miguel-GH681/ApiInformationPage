'use strict'

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var waterHeaterRoutes = require('./routes/waterheater.route');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/v1/ProductManagement', waterHeaterRoutes);

module.exports = app;