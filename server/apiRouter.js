const express = require('express');
const bballRouter = express.Router();
const bballController = require('./apiController');

bballRouter.route('/updates').get(bballController);
module.exports = bballRouter;