const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping-app', 'root', 'azureus30', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
