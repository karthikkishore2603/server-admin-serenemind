'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class City extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  City.init({
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'Cities',
    freezeTableName: true,
    timestamps: true
  });

  return City;
};