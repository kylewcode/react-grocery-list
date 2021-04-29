require('dotenv').config();

const express = require('express');
const app = express();
const port = 5000;

const connectDatabase = require('./database');
// const seedDatabase = require('./seed');

// Remove seeding function once ready to start development with database populated
// connectDatabase()
//   .then(() => seedDatabase())
//   .then(() => console.log('Database seeded.'))
//   .catch(err => {
//     console.log(err);
//   });
connectDatabase();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
