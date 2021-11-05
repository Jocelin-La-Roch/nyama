const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Food = sequelize.define('food', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reference: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  onTheMenu: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    default: true
  }
});

module.exports = Food;
