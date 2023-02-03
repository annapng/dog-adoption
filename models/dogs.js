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
<<<<<<< Updated upstream
=======
          
>>>>>>> Stashed changes
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'dogs',
    }
)

module.exports = Dogs;