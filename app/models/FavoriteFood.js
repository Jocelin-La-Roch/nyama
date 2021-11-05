const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const FavoriteFood = sequelize.define('favorite_food', {
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

module.exports = FavoriteFood;
