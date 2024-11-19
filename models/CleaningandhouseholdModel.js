const mongoose = require('mongoose')

const CleaningandhouseholdSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    
})

const Cleaningandhousehold= mongoose.model("Cleaningandhousehold", CleaningandhouseholdSchema)

module.exports = Cleaningandhousehold
