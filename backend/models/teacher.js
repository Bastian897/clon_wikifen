module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Teacher', {
    name: DataTypes.STRING,
    subjects: DataTypes.TEXT,
    profile: DataTypes.TEXT,
  });
};
