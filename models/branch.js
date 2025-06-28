const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    static associate(models) {
      // define association here if needed
      // Branch could be associated with Institute in the future
    }
  }
  Branch.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      institute: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instituteCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pincode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Branch",
    }
  );
  return Branch;
};
