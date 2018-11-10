const express = require('express')
const app = express()

const PORT = 3000

// dependencies to the routes file
let route = require('./routes')

// using as the middleware
app.use('/', route);
app.use(express.static('./dist'))

// app.get('/', (req, res)=> {
// 	res.json({msg: "Welcome"})
// })


app.listen(PORT, () => {
  console.log('Server is listenning on ', PORT)
})