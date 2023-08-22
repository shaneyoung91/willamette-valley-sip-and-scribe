const express = require('express');
const router = express.Router();
const wineriesCtrl = require('../../controllers/api/wineries');

// All paths start with '/api/wineries'

// GET /api/wineries (get all wineries)
router.get('/', wineriesCtrl.index)


module.exports = router;