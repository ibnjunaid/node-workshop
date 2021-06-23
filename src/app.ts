import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import {Request,Response} from 'express'
import mongoose from 'mongoose';

import catModel from './Models/catModel';

mongoose.connect(process.env.MONGO_URI || '',{useNewUrlParser: true, useUnifiedTopology: true},(err:any) =>{
    if(err){
        console.log('Cant connect to database');
    } else {
        console.log('Connected to database');
    }
})

const app = express();

app.use(express.json())

app.post('/cat/save',async (req:Request,res:Response) =>{
    console.log(req.body);
    const newCat = new catModel({...req.body});
    const savedDoc = await newCat.save();
    if(savedDoc){
        res.json({
            message : "New Cat saved Sucessfully",
            data : savedDoc
        })
    } else {
        res.sendStatus(500);
    }
})

app.get('/cat/find-by-name/:name',async (req:Request,res:Response) =>{
    const catName = req.params.name;
    const docs = await catModel.find({_id : catName})
    res.send(docs);
})



function onStart(){
    console.log('Server listening on http://localhost:9999');
}

app.listen(9999,onStart);