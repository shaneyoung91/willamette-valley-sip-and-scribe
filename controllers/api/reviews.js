const Review = require('../../models/review');

module.exports = {
    index,
    create,
    deleteReview,
};

async function deleteReview(req, res) {
    try {
        const review = await Review.findByIdAndDelete(req.params.id)
        res.status(200).send('Review deleted successfully');
    } catch (error) {
        console.log('Error deleting review:', error);
    }
}


async function create(req, res) {
    req.body.user = req.user._id;

    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        console.log('Error creating review:', error);
    }
}

async function index(req, res) {
    try { 
        const reviews = await Review.find({}).populate('author', 'name');
        res.json(reviews);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error' })
    }
}