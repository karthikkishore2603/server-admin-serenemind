const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Institute extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  Institute.init(
    {
      name: DataTypes.STRING,
      addressLine1: DataTypes.STRING,
      addressLine2: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      pinCode: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      telephoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      website: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Institute",
    }
  );
  return Institute;
};
