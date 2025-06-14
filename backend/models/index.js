const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres',
});

const User = require('./user')(sequelize, DataTypes);
const Teacher = require('./teacher')(sequelize, DataTypes);
const Note = require('./note')(sequelize, DataTypes);
const Evaluation = require('./evaluation')(sequelize, DataTypes);
const History = require('./history')(sequelize, DataTypes);

Teacher.hasMany(Evaluation);
Evaluation.belongsTo(Teacher);

Note.hasMany(History);
History.belongsTo(Note);

module.exports = {
  sequelize,
  User,
  Teacher,
  Note,
  Evaluation,
  History,
};
