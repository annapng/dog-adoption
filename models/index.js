const User = require('./User');
const Dogs = require('./dogs');
const Restriction = require('./restrictions');

Dog.belongsTo(User, {

});

User.hasMany(Dogs, {

});

module.exports = {User, Dogs, Restriction}; 