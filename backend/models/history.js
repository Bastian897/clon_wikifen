module.exports = (sequelize, DataTypes) => {
  return sequelize.define('History', {
    previous_content: DataTypes.TEXT,
  });
};
