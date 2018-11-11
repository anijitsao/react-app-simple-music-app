const express = require('express')
const app = express()

const PORT = 3000

// dependencies to the routes file
let route = require('./routes')

// using as the middleware
app.use('/', route);


app.listen(PORT, () => {
  console.log('Server is listenning on ', PORT)
})