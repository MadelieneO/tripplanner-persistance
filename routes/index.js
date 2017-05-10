const Promise = require('bluebird');
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
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
