const { Order } = require('../models/order') //Importing model from the model folder
const express = require('express') // importing the express
const router = express.Router()

// by this we can reach to http://localhost:3000/products
router.get(`/`, async (req, res) => {
  const orderList = await Order.find()
  res.send(orderList)

  if (!orderList) {
    res.status(201).jason({ success: false })
  }
})

module.exports = router
