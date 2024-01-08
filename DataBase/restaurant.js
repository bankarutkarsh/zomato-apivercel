const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    city: {
        type: Number
    }   
});

module.exports = mongoose.model('restaurants', restaurantSchema, 'restaurant');