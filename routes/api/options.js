'use strict';

const router = require('express').Router();
const Promise = require('bluebird');
const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');

// GET: /api/options
router.get('/', (req, res, next) => {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.json({dbHotels, dbRestaurants, dbActivities});
  })
  // Hotel.findAll()
  // .then(function(hotels) {
  //   res.json(hotels);
  // })
  // .catch(next)
})

module.exports = router;