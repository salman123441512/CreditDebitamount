const mongoose = require('mongoose')

const contactUsSchema =  mongoose.Schema({
    name:{
        required:[true,' Name is require'],
        type:String,
       
    },
    email:{
        required:[true,'Email is require'],
        type:String,
        
    },
    
    phone:{
        type:String,
        required:[true,'Phone No. is required']
       
    },
    subject:{
        type:String,
        required:[true,'Subject is required'],
    },
    
    message:{
        type:String,
        required:[true,'Message is required'],
    },
    Date:{
        type:String,
       default:''
    },
    active:{
        type:Boolean,
       default:true
    }
})

const contactUs = new mongoose.model('contactUs',contactUsSchema)
module.exports = contactUs