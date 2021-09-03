const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const OrdertItem = sequelize.define('ordertItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

module.exports = OrdertItem;
