const { Category } = require('../models/category') //Importing model from the model folder
const express = require('express') // importing the express
const router = express.Router()

// by this we can reach to http://localhost:3000/products
router.get(`/`, async (req, res) => {
  const categoryList = await Category.find()
  res.send(categoryList)

  if (!categoryList) {
    res.status(201).jason({ success: false })
  }
})

module.exports = router
