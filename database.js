const mongoose = require('mongoose')

async function database(){
    try {
        await mongoose.connect('mongodb+srv://mohdsalmansp22:Ambedkarfund1@cluster0.7pbbi7s.mongodb.net/AmbedkarData') 
        console.log('Database is connected succesfully')
    } catch (error) {
        console.log(error)
    }
}
database()