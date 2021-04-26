const mongoose = require('mongoose');
const { Schema } = mongoose;

const StoreSchema = new Schema({
  name: String,
  inventory: [{ description: String, price: Number }],
});

module.exports = Store = mongoose.model('store', StoreSchema);
