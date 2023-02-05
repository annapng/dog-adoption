const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
//Creates a new Sequelize model for goodWith
class goodWith extends Model {}

goodWith.init(
    {
        //Creating properties for goodwith
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
        //Linking database connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'goodWith',
    }
)
//Exporting goodWith
module.exports = goodWith;