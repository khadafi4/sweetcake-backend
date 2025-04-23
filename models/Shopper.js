const mongoose = require('mongoose');

const shopperSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  address: String
});

module.exports = mongoose.model('Shopper', shopperSchema, 'shoppers');
