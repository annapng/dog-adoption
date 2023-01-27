const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tag extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey : true,
            autoIncrement: true
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    },  
)