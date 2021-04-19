const { Product } = require('../models/product') //Importing model from the model folder
const express = require('express') // importing the express
const router = express.Router()

// by this we can reach to http://localhost:3000/products
router.get(`/`, async (req, res) => {
  const productList = await Product.find()
  res.send(productList)

  if (!productList) {
    res.status(201).jason({ success: false })
  }
})

router.post(`/`, (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  })

  product
    .save() // saving product to the mongodb Database
    .then((createdProduct) => {
      res.status(201).json(createdProduct)
    })
    // catching error if something goes wrong
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      })
    })
})

module.exports = router
