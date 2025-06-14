module.exports = (sequelize, DataTypes) => {
  const Revision = sequelize.define('revision', {
    tableName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rowId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    diff: {
      type: DataTypes.JSON,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return Revision;
};
