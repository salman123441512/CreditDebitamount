const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        required: [true, 'User Name is require'],
        type: String,
        unique:[true,'This Account Already Exist']
    },
    username: {
        required: [true, 'UserName is require'],
        type: String,
        unique:[true,'This userName Already Exist']
    },
    email: {
        required: [true, 'Email is require'],
        type: String,
        unique:[true,'This Email Already Exist']
    },
    password: {
        type: String,
        required: [true, 'Password is require']

    },
    phone: {
        type: String,
        required: [true, 'Phone No. is required'],
        unique:[true,'This Number Already Exist']
    },
    role: {
        type: String,
        default: 'buyer'
    },
    address: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        
    },
    amount: {
        type: String,
        
    },
    state:{
        type:String,
       default:''
     },
     image:{
         type:String,
       default:''
     },
     otp:{
        type:Number
     }
})

const User = new mongoose.model('Users', UserSchema)
module.exports = User