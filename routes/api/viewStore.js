const express = require('express');
const router = express.Router();

const StoreModel = require('../../models/Store');

// @route         GET api/viewStore
// @description   Fetches data from MongoDB database to provide store name, item, and item pricing information.
// @access        Private
router.get('/', async (req, res) => {
  try {
    const currentStores = await StoreModel.find({});
    res.json(currentStores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
