const List = require('./models/List');
const User = require('./models/User');
const Store = require('./models/Store');

const usersCollection = require('./seeds/users');
const listCollection = require('./seeds/list');
const storesCollection = require('./seeds/stores');

// Is it code smell to be referencing variables from the outer scope?
const wipeCollectionsData = async () => {
  await Promise.all([
    List.deleteMany({}),
    User.deleteMany({}),
    Store.deleteMany({}),
  ]);
  console.log('Database collections purged.');
};

const createCollections = async () => {
  await User.create(usersCollection);
  await List.create(listCollection);
  await Store.create(storesCollection);
};

const seedDatabase = async () => {
  try {
    await wipeCollectionsData();
    await createCollections();
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedDatabase;
