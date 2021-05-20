// const List = require('./models/List');
// const User = require('./models/User');
// const Store = require('./models/Store');

// const usersCollection = require('./seeds/users');
// const listCollection = require('./seeds/list');
// const storesCollection = require('./seeds/stores');

// const wipeCollectionsData = async () => {
//   await Promise.all([
//     List.deleteMany({}),
//     User.deleteMany({}),
//     Store.deleteMany({}),
//   ]);
//   console.log('Database collections purged.');
// };

// const createCollections = async () => {
//   await User.create(usersCollection);
//   await List.create(listCollection);
//   await Store.create(storesCollection);
// };

// const seedDatabase = async () => {
//   try {
//     await wipeCollectionsData();
//     await createCollections();
//   } catch (err) {
//     console.log(err);
//   }
// };

const wipeCollections = async (List, User, Store) => {
  await Promise.all([
    List.deleteMany({}),
    User.deleteMany({}),
    Store.deleteMany({}),
  ]);
  console.log('Database collections purged.');
};

const createCollections = async (usersCollection, listCollection, storesCollection) => {
  await User.create(usersCollection);
  await List.create(listCollection);
  await Store.create(storesCollection);
};

const seedDatabase = async () => {
  const List = require('./models/List');
  const User = require('./models/User');
  const Store = require('./models/Store');

  const users = require('./seeds/users');
  const list = require('./seeds/list');
  const stores = require('./seeds/stores');

  try {
    await wipeCollections(List, User, Store);
    await createCollections(users, list, stores);
  } catch (err) {
    console.log(err);
  }
};
module.exports = seedDatabase;
