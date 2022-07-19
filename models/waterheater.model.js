'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var waterHeaterSchema = Schema({
    code: String,
    name: String,
    productModel:String,
    description: String,
    brand: String,
    color: String,
    madeIn: String,
    material: String,
    services: String,
    type: String,
    packageSize: String,
    userManual: String,
    image: {
        url: String,
        id: String
    },
    power: String,
    voltage: String,
    rangeTemperature: String,
    warranty: {
        requirements: String,
        time: String,
        supplier: String
    },
    accesories : {
        plumbingSupplies :[],
        electricalItems: []
    }
});

module.exports = mongoose.model('waterheater', waterHeaterSchema);
