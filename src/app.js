const dotenv = require('dotenv');

dotenv.config()

const express = require('express');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true},(err) =>{
    if(err){
        console.log('Cant connect to database');
    } else {
        console.log('Connected to database');
    }
})
