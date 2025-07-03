const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.State, { foreignKey: "stateId" });
      City.belongsTo(models.Country, { foreignKey: "countryId" });
    }
  }
  City.init(
    {
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "States",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Countries",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
