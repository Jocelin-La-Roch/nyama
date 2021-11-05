const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const CommentRestaurant = sequelize.define('comment_restaurant', {
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
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = CommentRestaurant;
