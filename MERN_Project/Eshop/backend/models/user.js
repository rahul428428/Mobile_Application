const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
})

//Creating Model using  mongpoose Schema and exporting the Product
exports.User = mongoose.model('User', userSchema)
