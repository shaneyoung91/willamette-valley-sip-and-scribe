const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitingPolicySchema = new Schema({
    name: {
        Type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('VisitingPolicy', visitingPolicySchema) 