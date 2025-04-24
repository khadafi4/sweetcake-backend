const mongoose = require('mongoose');
const billingSchema = new mongoose.Schema({
  shopperEmail: String,
  billingAddress: String,
  zip: String,
  nameOnCard: String
});
module.exports = mongoose.model('Billing', billingSchema, 'billings');
