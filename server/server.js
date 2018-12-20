const express = require('express')
const app = express()

const PORT = 3000

// dependencies to the routes file
let route = require('./routes')
app.use(express.static('../dist'))

// using as the middleware
app.use('/services', route);


app.listen(PORT, () => {
  console.log('Server is listenning on ', PORT)
})