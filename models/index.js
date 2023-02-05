const Dogs = require('./dogs');
const User = require('./User');
const goodWith = require('./goodWith');
const DogPics = require('./dogPics');

Dogs.hasOne(DogPics, {
    foreignKey: 'dogs_id',
    onDelete: 'CASCADE'
});

DogPics.belongsTo(Dogs, {
    foreignKey: 'dogs_id',
    onDelete: 'CASCADE'
});


goodWith.hasMany(Dogs, {
    foreignKey: 'commonName',
    onDelete: 'CASCADE'
});

Dogs.belongsTo(goodWith, {
    foreignKey: 'commonName',
    onDelete: 'CASCADE'
});
//Exports
module.exports = {
    User, 
    Dogs,
    DogPics,
    goodWith, 

}; 