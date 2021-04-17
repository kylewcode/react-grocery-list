const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "./client/build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// I want to render a React component to the browser when I navigate to these routes in the browser.
app.get('/login-success', (req, res) => {
  res.send('Viewing grocery list main page');
});

app.get('/view-store', (req, res) => {
  res.send('Viewing store');
});

app.get('/view-price', (req, res) => {
  res.send('Viewing item price');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
