require('dotenv').config();

const express = require('express');
const app = express();
const port = 5000;

const connectDatabase = require('./database');
const seedDatabase = require('./seed');

// Remove seeding function once ready to start development with database populated
connectDatabase()
  .then(() => seedDatabase())
  .catch(err => {
    console.log(err);
  });

// (I should see the log 'MongoDB connected' before the log of the new user. The new user should be Kylie and added.)()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
