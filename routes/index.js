var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
const optionsRouter = require('./api/options');

router.use('/api/options', optionsRouter);

router.get('/', function(req, res, next) {
  res.render('index');
});
// router.get('/', function(req, res, next) {
//   Promise.all([
//     Hotel.findAll(),
//     Restaurant.findAll(),
//     Activity.findAll()
//   ])
//   .spread(function(dbHotels, dbRestaurants, dbActivities) {
//     res.render('index', {
//       templateHotels: dbHotels,
//       templateRestaurants: dbRestaurants,
//       templateActivities: dbActivities
//     });
//   })
//   .catch(next);
// });

module.exports = router;
