const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class DogPics extends Model {}

DogPics.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
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
            allowNull: true,
            references: {
                model: 'dogs',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: 'dogPics',
    }
)

module.exports = DogPics;