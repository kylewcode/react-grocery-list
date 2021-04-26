const mongoose = require('mongoose');
const List = require('./models/List');
const User = require('./models/User');
const Store = require('./models/Store');

const usersCollection = require('./seeds/users');
const listCollection = require('./seeds/list');

// Is it code smell to be referencing variables from the outer scope?
const wipeCollectionsData = async () => {
  await List.deleteMany({});
  await User.deleteMany({});
  // await Store.deleteMany({});
  console.log('Database collections purged.');
};

// Clean code: create all the user dummy data here
const createUserCollection = async () => {
  await User.create(usersCollection);
}

const createListCollection = async () => {
  await List.create(listCollection);
}

const seedDatabase = async () => {
  try {
    await wipeCollectionsData();

    await createUserCollection();
    await createListCollection();

  } catch (err) {
    console.log(err);
  }
};

module.exports = seedDatabase;
