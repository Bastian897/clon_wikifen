const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clonfen', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

module.exports = sequelize;
