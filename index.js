'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.connect('mongodb://localhost:27017/pruebaUno', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Successful Connection')
        app.listen(process.env.PORT || port, ()=>{
            console.log('Server running: ', process.env.PORT || port);
        })
    }).catch(err =>{
        console.log('Database connection error: ', err);
    })