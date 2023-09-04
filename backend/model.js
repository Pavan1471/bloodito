const mongoose = require("mongoose")

const Donate = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobilenumber:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    bloodtype:{
        type:String,
        required:true,
    },
})
module.exports = mongoose.model('Donate',Donate)