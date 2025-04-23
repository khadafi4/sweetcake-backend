const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  shopperEmail: String,
  items: [
    {
      product: String,
      quantity: Number
    }
  ]
});
module.exports = mongoose.model('Cart', cartSchema, 'carts');
