module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define('professor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile: DataTypes.TEXT
  });
  return Professor;
};
