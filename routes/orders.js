const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

//CREAR PEDIDO
router.post('/', async (req, res) => {
  console.log('BODY', req.body);
  const order = new Order({
    calle: req.body.calle,
    colonia: req.body.colonia,
    delegacion: req.body.delegacion,
    estado: req.body.estado,
    email: req.body.email,
    items: req.body.items,
  });
  try {
    const newOrder = await order.save();
    res.json(newOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
