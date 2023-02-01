const seedDogs = require('./dogs-seeds');
const seedDogPics = require('./dogpics-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedDogs();
    console.log('\n----- DOGS SEEDED -----\n');
  
    await seedDogPics();
    console.log('\n----- DOG PICS SEEDED -----\n');

    process.exit(0);
};

seedAll();