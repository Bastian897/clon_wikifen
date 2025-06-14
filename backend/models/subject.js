module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('subject', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT
  });
  return Subject;
};
