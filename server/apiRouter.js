const express = require('express');
const bballRouter = express.Router();
const bballController = require('./apiController');

bballRouter.route('/playerStats').post(bballController);
module.exports = bballRouter;