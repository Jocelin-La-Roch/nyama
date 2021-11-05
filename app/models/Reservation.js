const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Reservation = sequelize.define('reservation', {
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
  numSeats: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  day: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  bookingFee: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  validated: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    default: false,
  },
  issued: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    default: false,
  }
});

module.exports = Reservation;
