'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      // Associations can be defined here
      State.belongsTo(models.Country, { foreignKey: 'countryId' });
    }
  }
  
  State.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Countries',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'State',
    tableName: 'States',
    timestamps: true
  });
  
  return State;
};