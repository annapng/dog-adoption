const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
//Creates a new Sequelize model for Dogs
class Dogs extends Model {}

Dogs.init(
    {
        //Creating an id defining primary key 
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
        goodWith_commonName: {
            type: DataTypes.STRING,
            references: {
                model: 'goodWith',
                key: 'commonName'
            },
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        //Linking database connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'dogs',
    }
)
//Exporting Dogs
module.exports = Dogs;