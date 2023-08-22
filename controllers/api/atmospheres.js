const Atmosphere = require('../../models/atmosphere');

module.exports = {
    index,
};

async function index(req, res) {
    const atmospheres = await Atmosphere.find({});
    res.json(atmospheres);
}