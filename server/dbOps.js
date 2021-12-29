// dependencies
import mongodb from "mongodb"
const { MongoClient, ObjectId } = mongodb

const {
  URI_TO_CONNECT_MONGODB,
  DB_NAME,
  COLLECTION_MUSIC,
  SUCCESS,
  SERVER_ERR,
} = process.env

// this function will connect db and based on API send response
const connectDbAndRunQueries = async (apiName, req, res) => {
  try {
    const client = await new MongoClient(URI_TO_CONNECT_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).connect()
    // perform actions on the collection object
    const collection = client.db(DB_NAME).collection(COLLECTION_MUSIC)

    // perform several db actions based on API names
    chooseApiAndSendResponse(apiName, collection, req, res, client)
  } catch (err) {
    console.log("FAILED TO CONNECT DB ...", err)
  }
}

// choose the particular function for an API and process it
const chooseApiAndSendResponse = (apiName, collection, req, res, client) => {
  switch (apiName) {
    case "getSongs":
      makeGetSongs(collection, req, res, client)
      break
    case "updateRating":
      makeUpdateRating(collection, req, res, client)
      break
  }
}

// handle request for welcome API
const makeGetSongs = async (collection, req, res, client) => {
  // default output
  let output = { message: "failed" }
  try {
    const data = await collection.find({}).toArray()
    output = [...data] || []
  } catch (err) {
    console.log("Error occurred .. ", err)
  } finally {
    sendResponseAndCloseConnection(client, output, res)
  }
}

// handle request for /login API
const makeUpdateRating = async (collection, req, res, client) => {
  let output = { message: "failed" }
  try {
    // destructing es6 style
    let { id, rating } = req.params

    // avoid NaN while saving the rating
    rating = isNaN(parseInt(rating)) ? 1 : parseInt(rating)

    const docs = await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { rating } }
    )
    output = { message: "success" }
  } catch (err) {
    console.log("Error occurred", err)
  } finally {
    sendResponseAndCloseConnection(client, output, res)
  }
}

// function to send the response and close the db connection
function sendResponseAndCloseConnection(client, output, res) {
  if (output && res) {
    console.log(
      `========================\nOUTPUT AS RECEIVED AND BEFORE SENDING\n==================\n`,
      output
    )
    res.status(SUCCESS).json(output)
  } else {
    res.status(SERVER_ERR).json({ msg: "Internal Server Error" })
  }

  // close the database connection after sending the response
  client.close()
}

// exports
export { connectDbAndRunQueries }
