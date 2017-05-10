'use strict';

const router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.use('/', (req, res, next) => {
  Hotel.findAll()
  .then(function(hotels) {
    res.json(hotels);
  })
  .catch(next)
})

module.exports = router;