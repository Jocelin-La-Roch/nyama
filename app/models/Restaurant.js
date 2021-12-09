const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Restaurant = sequelize.define('restaurant', {
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
  region: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ville: {
    type: Sequelize.STRING,
    allowNull: false
  },
  district: {
    type: Sequelize.STRING,
    allowNull: false
  },
  landmark: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  isOpened: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  openHour: {
      type: Sequelize.TIME,
      allowNull: false
  },
  closeHour: {
    type: Sequelize.TIME,
    allowNull: false
  },
  allowDelivery: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  allowDeservation: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  latitude: {
    type: Sequelize.STRING,
    allowNull: false
  },
  longitude: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Restaurant;
