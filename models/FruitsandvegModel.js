const mongoose = require('mongoose')

const FruitsandvegSchema = new mongoose.Schema({
    
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    
})

const Fruitsandveg= mongoose.model("Fruitsandveg", FruitsandvegSchema)

module.exports = Fruitsandveg
