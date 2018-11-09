// dependencies
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

// most important don't forget
const ObjectId = mongodb.ObjectID;

const URI_TO_CONNECT_MONGODB = "mongodb+srv://root:root123@anijitsmongo-mwm6l.mongodb.net/allapps";
const DB_NAME = "allapps"

// this function will connect db and based on API send response
let connectDB = async (apiName, req, res) => {
	try {
		let client = await MongoClient.connect(URI_TO_CONNECT_MONGODB, { useNewUrlParser: true })
		// perform actions on the collection object
		const collection = client.db(DB_NAME).collection("musics")

		// perform several db actions based on API names
		chooseApiAndSendResponse(apiName, collection, req, res, client)
	} catch (err) {
		console.log('FAILED TO CONNECT DB ...', err)
	}
}

// choose the particular function for an API and process it
let chooseApiAndSendResponse = (apiName, collection, req, res, client) => {
	switch (apiName) {
		case 'getSongs':
			makeGetSongs(collection, req, res, client)
			break;
		case 'updateRating':
			makeUpdateRating(collection, req, res, client)
			break;

	}
}

// handle request for welcome API
let makeGetSongs = async (collection, req, res, client) => {

	let output = { "message": "failed" }
	try {
		let data = await collection.find({}).toArray()
		output = [...data] || []
		sendOutputAndCloseConnection(client, output, res)

	} catch (err) {
		console.log("ERror occurred .. ", err)
		sendOutputAndCloseConnection(client, output)
	}
}

// handle request for /login API
let makeUpdateRating = async (collection, req, res, client) => {
	let output = { message: 'failed' }
	try {
		// destructing es6 style
		let { id, rating } = req.params
		
		let docs = await collection.updateOne({ _id: ObjectId(id) }, { $set: { rating } })
		output = { message: 'success' }

		// prints the number of modified docs in the console
		console.log('number of modified documents', docs.result.nModified)
		sendOutputAndCloseConnection(client, output, res)
	} catch (err) {
		// if err just close the connection
		sendOutputAndCloseConnection(client, output)
	}
}




// function to send the response and close the db connection
function sendOutputAndCloseConnection(client, output, res) {
	if (output && res) {
		res.json(output)
	}

	// close the database connection after sending the response
	client.close()
}

// exports
module.exports = {
	connectDB
}