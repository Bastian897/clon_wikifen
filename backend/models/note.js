module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Note', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    file_url: DataTypes.STRING,
    subject: DataTypes.STRING,
  });
};
