const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  shopperEmail: String,
  destination: String,
  carrier: String,
  method: String,
  cost: Number
});

module.exports = mongoose.model('Shipping', shippingSchema, 'shippings');
