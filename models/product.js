const mongoose = require("mongoose")
const user = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    }

    , lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})
const product = new  mongoose.model("Product",user)
module.exports = product;