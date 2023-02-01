const User = require('./User');
const goodWith = require('./goodWith');
const Dogs = require('./dogs');
const DogPics = require('./dogPics');
//const Restriction = require('./restrictions');

//Dogs.belongsTo(User, {
  //  foreignKey: 'dogs_id'
////});

//User.hasMany(Dogs, {
    //foreignKey: 'dogs_id'
//});

DogPics.belongsTo(Dogs, {
    foreignKey: 'dogs_id'
});

//this is a problem
goodWith.hasMany(Dogs, {
    foreignKey: 'dog_goodWith'
});

Dogs.belongsTo(goodWith, {
    foreignKey: 'dog_goodWith'
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
    DogPics 
    //Restriction
}; 