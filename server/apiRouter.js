const express = require('express');
const bballRouter = express.Router();
const bballController = require('./apiController');

bballRouter.route('/playerStats').post(bballController.getPlayerStats);
bballRouter.route('/playerNames').get(bballController.getPlayerNames);
module.exports = bballRouter;