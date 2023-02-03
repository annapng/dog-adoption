const Dogs = require('./dogs');
const User = require('./User');
const goodWith = require('./goodWith');
//const Dogs = require('./dogs');
const DogPics = require('./dogPics');

//const Restriction = require('./restrictions');

//Dogs.belongsTo(User, {
  //  foreignKey: 'dogs_id'
////});

//User.hasMany(Dogs, {
    //foreignKey: 'dogs_id'
//});

Dogs.hasOne(DogPics, {
    foreignKey: 'dogs_id',
    onDelete: 'CASCADE'
});

DogPics.belongsTo(Dogs, {
    foreignKey: 'dogs_id',
    onDelete: 'CASCADE'
});

//this is a problem
goodWith.hasMany(Dogs, {
    foreignKey: 'commonName',
    onDelete: 'CASCADE'
});

Dogs.belongsTo(goodWith, {
    foreignKey: 'commonName',
    onDelete: 'CASCADE'
});
/*
Restriction.belongsToMany(User, {
    as: 'restriction_user',
    foreignKey: 'restriction_id'
});
*/
module.exports = {
    User, 
    Dogs,
    DogPics,
    goodWith, 
}; 