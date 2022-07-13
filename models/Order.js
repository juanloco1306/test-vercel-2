const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // id del pedido, email cliente, array objetos
  calle: {
    type: String,
    required: true,
  },
  colonia: {
    type: String,
    required: true,
  },
  delegacion: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  items: [
    {
      _id: false,
      id: String,
      qty: Number,
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
