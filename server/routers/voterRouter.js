const express = require('express');
// const voterModel = require('../models/voterModel');
const { getAllVoters, voterSignup, voterLogin, voterLogout } = require('../controller/voterController');
const cookieParser = require('cookie-parser');
const { protectRoute } = require('../controller/authController');

const voterRouter = express.Router();

//get all voters to display on leaderboard
voterRouter.route('/getall').get(getAllVoters);

//voter wants to signup 
voterRouter.route('/signup').post(voterSignup);

voterRouter.route('/login').post(voterLogin);

// voterRouter.use(protectRoute);
voterRouter.route('/logout').get(protectRoute, voterLogout);

module.exports = voterRouter;