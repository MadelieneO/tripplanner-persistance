const Promise = require('bluebird');
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const optionsRouter = require('./api/options');
const daysRouter = require('./api/days');

router.use('/api/options', optionsRouter);
router.use('/api/days', daysRouter);

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
