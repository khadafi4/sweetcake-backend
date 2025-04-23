
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean,
  image: String
});

module.exports = mongoose.model('Product', ProductSchema);
