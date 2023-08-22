const express = require('express');
const router = express.Router();
const additionalAmenitiesCtrl = require('../../controllers/api/additionalAmenities');

// All paths start with '/api/additionalAmenities'

// GET /api/additionalAmenities (get all additionalAmenities)
router.get('/', additionalAmenitiesCtrl.index)


module.exports = router;