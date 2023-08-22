const AdditionalAmenity = require('../../models/additionalAmenity');

module.exports = {
    index,
};

async function index(req, res) {
    const additionalAmenities = await AdditionalAmenity.find({});
    res.json(additionalAmenities);
}