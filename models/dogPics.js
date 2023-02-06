const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// Creates a new Sequelize model for DogPics
class DogPics extends Model {}

DogPics.init(
    {
        //Creating an id defining primary key
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
            allowNull: false,
            references: {
                model: 'dogs',
                key: 'id'
            },
        }
    },
    {
        //Linking database connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'dogPics',
    }
)
//Exporting DogPics
module.exports = DogPics;