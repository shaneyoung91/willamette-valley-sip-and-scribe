const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionalAmenitySchema = new Schema({
    name: {
        Type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('AdditionalAmenity', additionalAmenitySchema) 