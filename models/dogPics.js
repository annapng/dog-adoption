const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class DogPics extends Model {}

DogPics.init(
    {
        APIname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commonName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dogPic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dogs_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dogPics',
    }
)

module.exports = DogPics;