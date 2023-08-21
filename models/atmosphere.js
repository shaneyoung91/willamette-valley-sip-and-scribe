const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const atmosphereSchema = new Schema({
    name: {
        Type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Atmosphere', atmosphereSchema)