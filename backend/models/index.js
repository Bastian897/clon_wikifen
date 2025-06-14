const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres',
});

// Modelos
const User = require('./user')(sequelize, DataTypes);
const Teacher = require('./teacher')(sequelize, DataTypes);
const Professor = require('./professor')(sequelize, DataTypes);
const Subject = require('./subject')(sequelize, DataTypes);
const Note = require('./note')(sequelize, DataTypes);
const Evaluation = require('./evaluation')(sequelize, DataTypes);
const History = require('./history')(sequelize, DataTypes);

// Relaciones
Evaluation.belongsTo(Teacher);
Teacher.hasMany(Evaluation);

Note.hasMany(History);
History.belongsTo(Note);

// Nuevas relaciones (rama main)
Professor.belongsToMany(Subject, { through: 'professor_subjects' });
Subject.belongsToMany(Professor, { through: 'professor_subjects' });

Evaluation.belongsTo(Professor);
Evaluation.belongsTo(User, { as: 'author' });

Note.belongsTo(Subject);
Note.belongsTo(User, { as: 'author' });

// Exportar
module.exports = {
  sequelize,
  Sequelize,
  User,
  Teacher,
  Professor,
  Subject,
  Note,
  Evaluation,
  History,
};

