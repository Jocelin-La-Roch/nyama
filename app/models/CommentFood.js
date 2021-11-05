const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const CommentFood = sequelize.define('comment_food', {
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

module.exports = CommentFood;
