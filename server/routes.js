// dependencies
const express = require('express')

// for Cross Origin Resource Sharing
const cors = require('cors')

const morgan = require('morgan')
const bodyParser = require('body-parser')


// local file dependencies
const dbOps = require('./dbOps')
let router = express.Router()

// middlewares
router.use(cors())
router.use(bodyParser.json({ type: 'application/json' }))
router.use(morgan('dev'))

// most important line don't forget
// serving static files
router.use(express.static('../dist'))

router.get('/getsongs', (req, res) => {
	dbOps.connectDB('getSongs', req, res)
})

router.put('/updaterating/:id/:rating', (req, res) => {
	dbOps.connectDB('updateRating', req, res)
})


module.exports = router