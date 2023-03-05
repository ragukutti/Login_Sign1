const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const inputSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('userlogin',inputSchema)//users