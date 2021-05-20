const express = require('express');
const router = express.Router();

const StoreModel = require('../../models/Store');
const ListModel = require('../../models/List');

// @route         GET api/viewPrices
// @description   Fetches data from MongoDB database to provide store name, item, and item pricing information.
// @access        Private
router.get('/', async (req, res) => {
  try {
    console.log(req.query.food);
    // Filter all stores that have item_description (apple) in their inventory
    const currentStores = await StoreModel.find().where('inventory.description').eq(`${req.query.food}`);

    // const currentList = await ListModel.findById('608b55b423b16f1297ea49dd');

    // I want to only return the stores that have the item queried for
    // res.json({ groceryList: currentList, groceryStores: currentStores });
    res.json(currentStores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
