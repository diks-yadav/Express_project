const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product_name: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
  quantity: {
    required: true,
    type: Number,
  },
  status: {
    required: true,
    type: String,
  },
});

const Orders = mongoose.model("order", orderSchema);
module.exports = Orders;
