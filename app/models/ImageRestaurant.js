const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const ImageRestautant = sequelize.define('image_restaurant', {
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
  format: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = ImageRestautant;
