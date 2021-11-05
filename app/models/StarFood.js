const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const FoodStar = sequelize.define('food_star', {
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

module.exports = FoodStar;
