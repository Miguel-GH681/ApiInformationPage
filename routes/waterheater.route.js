'use strict'

var express = require('express');
var waterHeaterController = require('../controllers/waterheater.controller');
const upload = require('../utils/multer.config');

var api = express.Router();
api.post('/saveWaterHeater', upload.single('image'), waterHeaterController.saveWaterHeater);
api.get('/getWaterHeaters', waterHeaterController.getWaterHeaters);
api.get('/getWaterHeater/:id', waterHeaterController.getWaterHeater);

module.exports = api;