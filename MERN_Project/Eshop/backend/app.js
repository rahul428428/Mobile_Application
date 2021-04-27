require('dotenv/config')

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const api = process.env.API_URL

app.use(cors()) // to use cors
app.options('*', cors()) // HTTP OPTIONS method requests permitted communication options for a given URL or server. A client can specify a URL with this method, or an asterisk (*) to refer to the entire server.

//middleware
app.use(express.json()) //for parsing the Json
app.use(morgan('tiny'))

//Routes
const categoriesRoutes = require('./routes/categories') // Coming from categories.js folder in  routes
const productRoutes = require('./routes/products') // Coming from  products.js  folder and routes
const userRoutes = require('./routes/users') // Coming from  users.js  folder and routes
const orderRoutes = require('./routes/orders') // Coming from  orders.js  folder and routes

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productRoutes)
app.use(`${api}/users`, userRoutes)
app.use(`${api}/orders`, orderRoutes)

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
