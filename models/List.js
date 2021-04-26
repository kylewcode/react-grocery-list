const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
  items: [{ completed: Boolean, description: String, quantity: Number }],
});

module.exports = List = mongoose.model('list', ListSchema);
