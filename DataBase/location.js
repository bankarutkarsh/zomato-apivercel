const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const locationSchema = new Schema({
    city_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('locations',locationSchema,'location');