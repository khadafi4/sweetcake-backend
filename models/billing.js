const mongoose = require('mongoose');
const BillingSchema = new mongoose.Schema({
  shopperEmail: String,
  billingAddress: String,
  zip: String,
  cardLast4: String,
  nameOnCard: String
});
module.exports = mongoose.model('Billing', BillingSchema);
