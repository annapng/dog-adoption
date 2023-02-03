const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class goodWith extends Model {}

goodWith.init(
    {
        commonName: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        otherDogs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kids: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: 'goodWith',
    }
)

module.exports = goodWith;