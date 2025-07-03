const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.State, { foreignKey: "countryId" });
      Country.hasMany(models.City, { foreignKey: "countryId" });
    }
  }
  Country.init(
    {
      countryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};
