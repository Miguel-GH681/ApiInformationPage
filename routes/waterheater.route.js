'use strict'

var express = require('express');
const app = require('../app');
var waterHeaterController = require('../controllers/waterheater.controller');
const upload = require('../utils/multer.config');

var api = express.Router();
api.get('/', (req, res)=> res.send("Hello Word"));
api.post('/SaveWaterHeater', upload.single('image'), waterHeaterController.saveWaterHeater);
api.get('/getWaterHeaters', waterHeaterController.getWaterHeaters);
api.get('/getWaterHeater/:id', waterHeaterController.getWaterHeater);

module.exports = api;

