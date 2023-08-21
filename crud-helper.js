// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Review = require('./models/item');
// const Winery = require('./models/category');

// Local variables will come in handy for holding retrieved documents
let user, review, winery;
let users, reviews, wineries;