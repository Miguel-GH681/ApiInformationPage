'use strict'

var waterHeaterModel = require('../models/waterheater.model');
const cloudinary = require('../utils/cloudinary.config');

async function saveWaterHeater(req, res){
    var waterHeater = new waterHeaterModel();
    var params = req.body;

    const result = await cloudinary.uploader.upload(req.file.path);

    waterHeaterModel.findOne({code: params.code}, (err, ok)=>{
        if(err){
            res.status(500).send({message: 'Server error'});
        } else if(ok){
            res.status(200).send({message: 'The water heater already exists in the database!'});
        } else{
            waterHeater.code = params.code;
            waterHeater.name = params.name;
            waterHeater.productModel = params.productModel;
            waterHeater.description = params.description;
            waterHeater.brand = params.brand;
            waterHeater.color = params.color;
            waterHeater.madeIn = params.madeIn;
            waterHeater.material = params.material;
            waterHeater.services = params.services;
            waterHeater.type = params.type;
            waterHeater.packageSize = params.packageSize;
            waterHeater.userManual = params.userManual;
            waterHeater.image.url = result.secure_url;
            waterHeater.image.id = result.public_id;
            waterHeater.power = params.power;
            waterHeater.voltage = params.voltage;
            waterHeater.rangeTemperature = params.rangeTemperature;
            waterHeater.accesories.plumbingSupplies = params.plumbingSupplies;
            waterHeater.accesories.electricalItems = params.electricalItems;
            waterHeater.warranty.requirements = params.warrantyRequirements;
            waterHeater.warranty.time = params.warrantyTime;
            waterHeater.warranty.supplier = params.warrantySupplier;

            waterHeater.save((err, success)=>{
                if(err){
                    res.status(500).send({message: 'Server error!', err});
                } else if(success){
                    res.status(204).send({message: 'Successful operation!'});
                } else{
                    res.status(400).send({message: 'Failed operation!'})
                }
            });
        }
    })
}

function getWaterHeaters(req, res){
    
    waterHeaterModel.find((err, ok)=>{
        if(err){
            res.status(500).send({message: 'Server error!'});
        } else if(ok){
            res.status(200).json(ok);
        } else{
            res.status(400).send({message: 'Failed operation!'});
        }
    })
}

function getWaterHeater(req, res){
    var id = req.params.id;
    waterHeaterModel.findOne({code: id}, (err, ok)=>{
        if(err){
            res.status(500).send({message: 'Server error!'});
        } else if(ok){
            res.status(200).json(ok);
        }else{
            res.status(400).send({message: 'Failed operation!'})
        }
    })
}

module.exports = {
    saveWaterHeater,
    getWaterHeaters,
    getWaterHeater
}