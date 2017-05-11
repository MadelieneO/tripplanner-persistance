var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
const Day = require('./day');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel);          // 1 day can have 1 hotel
Day.belongsToMany(Restaurant, { through: 'day_restaurant' }); // 1 Day can have many Restaurants
Day.belongsToMany(Activity, { through: 'day_activity' });   // 1 Day can have many Activities

module.exports = db;
