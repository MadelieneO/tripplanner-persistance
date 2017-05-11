'use strict';

const Sequelize = require('sequelize');
const router = require('express').Router();
const Day = require('../../models/day');

// GET /api/days
router.get('/', function(req, res, next) {
  Day.findAll()
  .then(days => res.json(days))
  .catch(next)
})

// GET /api/days/1
router.get('/:day', function(req, res, next) {
  Day.findOne({
    where: {
      number: req.params.day
    }
  })
  .then(day => res.json(day))
  .catch(next)
})

// POST /api/days
router.post('/', function(req, res, next) {
  Day.create({
    where: {
      number: req.body.number
    }
  })
  .then(day => res.json(day))
  .catch(next)
})

// POST /api/days/:day/restaurants
router.post('/:day/restaurants', function(req, res, next) {
  // find restaurants with req.body...

  Day.create({
    where: {
      number: req.params.day
    }
  })
  .then(day => res.json(day))
  .catch(next)
})

// PUT /api/days...
// router.put('/', function(req, res, next) {
//     //...
// })

// DELETE /api/days/1
router.delete('/:day', function(req, res, next) {
  Day.destroy({
    where: {
      number: req.params.day
    }
  })
  .then(dayDeleted => res.json(dayDeleted))
  .catch(next)
})

module.exports = router;