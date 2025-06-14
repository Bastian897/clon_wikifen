module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Evaluation', {
    rating: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
  });
};
