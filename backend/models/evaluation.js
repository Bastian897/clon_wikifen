module.exports = (sequelize, DataTypes) => {
  const Evaluation = sequelize.define('evaluation', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      }
    },
    comment: DataTypes.TEXT,
  });

  return Evaluation;
};

