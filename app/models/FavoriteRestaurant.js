const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const FavoriteRestaurant = sequelize.define('favorite_restaurant', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  reference: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
});

module.exports = FavoriteRestaurant;
