const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.objectId, ref: "User" },
  subtotal: Number,
});

const Order = new mongoose.Model("Order", orderSchema);
module.exports = Order;
