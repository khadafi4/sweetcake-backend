const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  shopperEmail: String,
  items: [
    {
      product: String,
      quantity: Number
    }
  ]
});
module.exports = mongoose.model('Cart', cartSchema, 'carts');
