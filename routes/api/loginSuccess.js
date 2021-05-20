const express = require('express');
const router = express.Router();

const ListModel = require('../../models/List');
const StoreModel = require('../../models/Store');
const UserModel = require('../../models/User');

// Consider validation using express-validator

// @route         GET api/login-success
// @description   Fetches data from MongoDB database that is needed to populate the login success page.
// @access        Private
router.get('/', async (req, res) => {
  try {
    const currentList = await ListModel.findById('608b55b423b16f1297ea49dd');
    const currentStores = await StoreModel.find({});

    // TODO
    // Implement authorization
    const currentAuthorizedUser = await UserModel.findOne({username: 'Kyle'});

    res.json({ groceryList: currentList, groceryStores: currentStores, authorizedUser: currentAuthorizedUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
