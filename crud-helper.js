// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Review = require('./models/item');
// const Winery = require('./models/category');
// const Atmosphere = require('./models/atmosphere);
// const VisitingPolicy = require('./models/visitingPolicy);
// const AdditionalAmenity = require('./models/additionalAmenity);

// Local variables will come in handy for holding retrieved documents
let user, review, winery, atmosphere, visitingPolicy, additionalAmenity;
let users, reviews, wineries, atmospheres, visitingPolicies, additionalAmenities;