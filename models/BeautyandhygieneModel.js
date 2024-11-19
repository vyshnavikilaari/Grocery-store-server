const mongoose = require('mongoose')

const BeautyandhygieneSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    expiry_date: {
        type: Date,
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

const Beautyandhygiene= mongoose.model("Beautyandhygiene", BeautyandhygieneSchema)

module.exports = Beautyandhygiene
