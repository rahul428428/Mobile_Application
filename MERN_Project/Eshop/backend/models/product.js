const mongoose = require('mongoose')

//Creating Mongoose Schema
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
})

//Creating Model using  mongpoose Schema and exporting the Product
exports.Product = mongoose.model('Product', productSchema)
