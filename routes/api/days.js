'use strict';

const Sequelize = require('sequelize');
const router = require('express').Router();
const Day = require('../../models/day');

// Get all days, each with its attractions
// GET /api/days
router.get('/', function(req, res, next) {
  Day.findAll({
    include: [Hotel, Restaurant, Activity]
  })
  .then(days => res.json(days))
  .catch(next)
})

// POST /api/days
router.post('/', function(req, res, next) {
  Day.create(req.body)
  .then(createdDay => res.status(201).json(createdDay)) // 201: created
  .catch(next)
})

// id vs number ==> PK vs column 'number' which represents the day:
//   Reason why PK/id is used instead of db's days.number is b/c user
//   can delete a day (ex day #2), then the day after it (day #3) has its
//   day number changed. However, by using the PK, no reshuffling is needed
//   in the db.
// DELETE /api/days/1
router.delete('/:id', function(req, res, next) {
  Day.destroy({
    where: {
      id: req.params.id 
    }
  })
  .then(() => res.status(204).end()) // could also just do: res.end() or res.sendStatus(204)
  .catch(next)
})

// Attractions on days:

// Register a hotel to a day
// PUT /api/days/2/hotel
router.put('/dayId:/hotel', function(req, res, next) {
  Day.findById({
    where: {
      id: req.body.dayId
    }
  })
  .then(function(dayFound) {
    return dayFound.setHotel(req.body.hotelId); // association method
  })
  .then(function(day) {  // will have the hotelId filled in but not the hotel itself
    res.sendStatus(204); // all went well, no content
  })
})

// Register a restaurant to a day
// Register an activity to a day


// Remove a hotel from a day
router.delete('/:dayId/hotel', function(req, res, next) {
  Day.findById(req.params.dayId)
  .then(function(day) {
    return day.setHotel(null);
  })
  .then(() => res.sendStatus(204))
  .catch(next)
})

// Remote a restaurant from a day
// Remove an activity from a day

module.exports = router;