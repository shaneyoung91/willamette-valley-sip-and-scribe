const VisitingPolicy = require('../../models/visitingPolicy');

module.exports = {
    index,
};

async function index(req, res) {
    const visitingPolicies = await VisitingPolicy.find({});
    res.json(visitingPolicies);
}