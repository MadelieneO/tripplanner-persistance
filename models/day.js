'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Day = db.define('day', {
  number: Sequelize.INTEGER,
  allowNull: false
})

module.exports = Day;