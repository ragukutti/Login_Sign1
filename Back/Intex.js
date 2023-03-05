//jNYnc4cqrX2624ZT
const express = require('express');
const mongoose = require('mongoose');
const app= express();
const router = require('./Router/LoginRouter');
const cors = require('cors');
const port = 9000;


app.use(express.json());
app.use(cors());
app.use('/user',router);

 mongoose.connect('mongodb+srv://ragupro:jNYnc4cqrX2624ZT@cluster0.jekvem1.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log('database connected')})  
.then(app.listen(port,()=>{
    console.log(`server is running ${port}`)
}));
