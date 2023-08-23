const Review = require('../../models/review')

module.exports = {
    index,
    create,
};

async function create(req, res) {
    if (!req.user || !req.user._id) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    req.body.user = req.user._id;

    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function index(req, res) {
    const reviews = await Review.find({})
    res.json(reviews);
}