const { User } = require('../models/user') //Importing model from the model folder
const express = require('express') // importing the express
const router = express.Router()

// by this we can reach to http://localhost:3000/products
router.get(`/`, async (req, res) => {
  const UserList = await User.find()
  res.send(UserList)

  if (!UserList) {
    res.status(201).jason({ success: false })
  }
})

module.exports = router
