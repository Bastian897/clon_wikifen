const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Professor = require('./professor')(sequelize, Sequelize.DataTypes);
const Subject = require('./subject')(sequelize, Sequelize.DataTypes);
const Evaluation = require('./evaluation')(sequelize, Sequelize.DataTypes);
const Note = require('./note')(sequelize, Sequelize.DataTypes);

// Relations
Professor.belongsToMany(Subject, { through: 'professor_subjects' });
Subject.belongsToMany(Professor, { through: 'professor_subjects' });

Evaluation.belongsTo(Professor);
Evaluation.belongsTo(User, { as: 'author' });

Note.belongsTo(Subject);
Note.belongsTo(User, { as: 'author' });

module.exports = {
  sequelize,
  Sequelize,
  User,
  Professor,
  Subject,
  Evaluation,
  Note
};
