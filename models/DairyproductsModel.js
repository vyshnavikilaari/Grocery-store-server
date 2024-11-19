const mongoose = require('mongoose')

const DairyproductsSchema= new mongoose.Schema({
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

const Dairyproducts= mongoose.model("Dairyproducts", DairyproductsSchema)

module.exports = Dairyproducts
