require('dotenv').config();

const express = require('express');
const app = express();
const port = 5000;

const connectDatabase = require('./database');

connectDatabase();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
