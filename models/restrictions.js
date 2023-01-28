const { Model, DataTypes } = require('sequelize');
const { Restriction } = require('.');

const sequelize = require('../config/connection');

class Restrictions extends Model {}

Restrictions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'restrictions',
    }
)

module.exports = Restrictions; 