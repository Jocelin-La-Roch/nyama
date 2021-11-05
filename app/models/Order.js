const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('order', {
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
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  foodPrice: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  shippingCost: {
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

module.exports = Order;
