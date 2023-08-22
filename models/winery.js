const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const winerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    images: {
        type: [String],
    },
    hours: {
        type: String,
    },
    atmospheres: [{
        type: Schema.Types.ObjectId,
        ref: 'Atmosphere'
    }],
    additionalAmenities: [{
        type: Schema.Types.ObjectId,
        ref: 'AdditionalAmenity'
    }],
    visitingPolicies: [{
        type: Schema.Types.ObjectId,
        ref: 'VisitingPolicy'
    }],
})

module.exports = mongoose.model('Winery', winerySchema);