const Winery = require('../../models/winery');

module.exports = {
    index,
};

async function index(req, res) {
    const wineries = await Winery.find({});
    res.json(wineries);
}