const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const winerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    images: {
        type: [String],
    },
    hours: {
        type: String,
    },
    atmospheres: {
        type: Schema.Types.ObjectId,
        ref: 'Atmosphere'
    },
    additionalAmenities: {
        type: Schema.Types.ObjectId,
        ref: 'AdditionalAmenity'
    },
    visitingPolicies: {
        type: Schema.Types.ObjectId,
        ref: 'VisitingPolicy'
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    },
})

module.exports = mongoose.model('Winery', winerySchema);