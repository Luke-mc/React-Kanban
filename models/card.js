module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    title: DataTypes.TEXT,
    priority: DataTypes.TEXT,
    createdBy: DataTypes.TEXT,
    assignedTo: DataTypes.TEXT,
    stage: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Card;
};

