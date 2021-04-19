require('dotenv/config')

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const api = process.env.API_URL

//middleware
app.use(express.json()) //for parsing the Json
app.use(morgan('tiny'))

//Routes
const categoriesRoutes = require('./routes/categories') // Coming from categories.js folder in  routes
const productRoutes = require('./routes/products') // Coming from  products.js  folder and routes
const userRoutes = require('./routes/users') // Coming from  users.js  folder and routes
const orderRoutes = require('./routes/orders') // Coming from  orders.js  folder and routes

app.use(`${api}/products`, categoriesRoutes)
app.use(`${api}/products`, productRoutes)
app.use(`${api}/products`, userRoutes)
app.use(`${api}/products`, orderRoutes)

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database',
  })
  .then(() => {
    console.log('Database Connection is Ready')
  })
  .catch((err) => {
    console.log(err)
  })

//Server
app.listen(3000, () => {
  console.log(api)

  console.log('Server is running http://localhost:3000')
})
