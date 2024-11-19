const mongoose = require('mongoose')

const SnacksSchema = new mongoose.Schema({
    
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

const Snacks= mongoose.model("Snacks", SnacksSchema)

module.exports = Snacks
