const express = require('express');
const router = express.Router();
const atmospheresCtrl = require('../../controllers/api/atmospheres');

// All paths start with '/api/atmospheres'

// GET /api/atmospheres (get all atmospheres)
router.get('/', atmospheresCtrl.index)


module.exports = router;