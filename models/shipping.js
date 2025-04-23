const mongoose = require('mongoose');

const ShippingSchema = new mongoose.Schema({
  shopperEmail: String,
  destination: String,
  carrier: String,
  method: String,
  cost: Number
});

module.exports = mongoose.model('Shipping', shippingSchema, 'shippings');
