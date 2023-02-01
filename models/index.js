const User = require('./User');
const Dogs = require('./dogs');
const DogPics = require('./dogPics');
const goodWith = require('./goodWith');
//const Restriction = require('./restrictions');

Dogs.belongsTo(User, {
    foreignKey: 'dogs_id'
});

User.hasMany(Dogs, {
    foreignKey: 'dogs_id'
});

DogPics.belongsTo(Dogs, {
    foreignKey: 'commonName'
});

goodWith.belongsTo(Dogs, {
    foreignKey: 'commonName'
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
    //Restriction
}; 