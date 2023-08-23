const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

// All paths start with '/api/reviews'

// POST /api/reviews (show all review)
router.get('/', reviewsCtrl.index)

// POST /api/reviews (create new review)
router.post('/', reviewsCtrl.create)


module.exports = router;