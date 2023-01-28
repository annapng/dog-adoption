const User = require('./User');
const Dogs = require('./dogs');
const Restriction = require('./restrictions');

Dogs.belongsTo(User, {
    foreignKey: 'dogs_id'
});

User.hasMany(Dogs, {
    foreignKey: 'dogs_id'
});

Restriction.belongsToMany(User, {

});

module.exports = {
    User, 
    Dogs, 
    Restriction
}; 