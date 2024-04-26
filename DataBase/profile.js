const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    username: {
        type: String
    }   
});

module.exports = mongoose.model('Users', profileSchema, 'profiles');