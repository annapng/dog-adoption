const Dogs = require('./dogs');
const User = require('./User');
const GoodWith = require('./goodWith');
const DogPics = require('./dogPics');

Dogs.hasOne(DogPics, {
    foreignKey: 'dogs_id',
    onDelete: 'CASCADE'
});

DogPics.belongsTo(Dogs, {
    foreignKey: 'dogs_id',
    onDelete: 'CASCADE'
});


GoodWith.hasMany(Dogs, {
    foreignKey: 'commonName',
    onDelete: 'CASCADE'
});

Dogs.belongsTo(GoodWith, {
    foreignKey: 'commonName',
    onDelete: 'CASCADE'
});
//Exports
module.exports = {
    User, 
    Dogs,
    DogPics,
    GoodWith, 

}; 