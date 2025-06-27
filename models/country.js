'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  
  Country.init({
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Country',
    tableName: 'Countries',
    timestamps: true
  });
  
  return Country;
};