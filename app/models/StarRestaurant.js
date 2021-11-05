const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const StarRestaurant = sequelize.define('star_restaurant', {
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
  numStars: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = StarRestaurant;
