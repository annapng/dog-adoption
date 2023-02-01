const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Dogs extends Model {}

Dogs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commonName: {
            type: DataTypes.STRING,
            foreignKey: true,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        goodWith: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likesToPlay: {
            type: DataTypes.STRING,
            allowNull: false,
        }


    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog',
    }
)

module.exports = Dogs;