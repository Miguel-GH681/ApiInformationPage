'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.connect('mongodb+srv://alcrack:guest12345@cluster0.exvzvb1.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Successful Connection')
        app.listen(process.env.PORT || port, ()=>{
            console.log('Server running: ', process.env.PORT || port);
        })
    }).catch(err =>{
        console.log('Database connection error: ', err);
    })