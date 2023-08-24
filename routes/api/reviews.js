const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

// All paths start with '/api/reviews'

// GET /api/reviews (show all reviews)
router.get('/', reviewsCtrl.index)

// DELETE /api/reviews/:id (delete review)
router.delete('/:id', reviewsCtrl.deleteReview)

// PUT /api/reviews/:id (update review)
router.put('/:id', reviewsCtrl.updateReview)

// POST /api/reviews (create new review)
router.post('/', reviewsCtrl.create)


module.exports = router;