const mongoose = require('mongoose');
const ReturnSchema = new mongoose.Schema({
  shopperEmail: String,
  product: String,
  reason: String,
  dateRequested: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Return', ReturnSchema);
