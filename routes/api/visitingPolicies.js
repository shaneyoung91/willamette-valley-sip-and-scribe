const express = require('express');
const router = express.Router();
const visitingPoliciesCtrl = require('../../controllers/api/visitingPolicies');

// All paths start with '/api/visitingPolicies'

// GET /api/visitingPolicies (get all visitingPolicies)
router.get('/', visitingPoliciesCtrl.index)


module.exports = router;