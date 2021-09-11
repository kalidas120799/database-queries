//CREAT MODEL
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const COLLECTION_NAME = mongoose.model("COLLECTION_NAME", schema)
module.exports = cart