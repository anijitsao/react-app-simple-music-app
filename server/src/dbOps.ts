// dependencies
import mongodb from "mongodb";
const { MongoClient, ObjectId } = mongodb;

const { DB_NAME, SUCCESS, SERVER_ERR } = process.env;

const URI_TO_CONNECT_MONGODB = <string>process.env.URI_TO_CONNECT_MONGODB;
const COLLECTION_MUSIC = <string>process.env.COLLECTION_MUSIC;

// this function will connect db and based on API send response
const connectDbAndRunQueries = async (apiName: string, req: any, res: any) => {
  try {
    const client = await new MongoClient(URI_TO_CONNECT_MONGODB, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }).connect();
    // perform actions on the collection object
    const collection = client.db(DB_NAME).collection(COLLECTION_MUSIC);

    // perform several db actions based on API names
    chooseApiAndSendResponse(apiName, collection, req, res, client);
  } catch (err) {
    console.log("FAILED TO CONNECT DB ...", err);
  }
};

// choose the particular function for an API and process it
const chooseApiAndSendResponse = (
  apiName: string,
  collection: any,
  req: any,
  res: any,
  client: any
) => {
  switch (apiName) {
    case "getSongs":
      makeGetSongs(collection, req, res, client);
      break;
    case "updateRating":
      makeUpdateRating(collection, req, res, client);
      break;
  }
};

// handle request for welcome API
const makeGetSongs = async (
  collection: any,
  req: any,
  res: any,
  client: any
) => {
  // default output
  let output: any = { message: "failed" };
  try {
    const data = await collection.find({}).toArray();
    output = [...data] || [];
  } catch (err) {
    console.log("Error occurred .. ", err);
  } finally {
    sendResponseAndCloseConnection(client, output, res);
  }
};

// handle request for /login API
const makeUpdateRating = async (
  collection: any,
  req: any,
  res: any,
  client: any
) => {
  let output = { message: "failed" };
  try {
    // destructing es6 style
    let { id, rating } = req.params;

    // avoid NaN while saving the rating
    rating = isNaN(parseInt(rating)) ? 1 : parseInt(rating);

    const docs = await collection.updateOne(
      { _id: 1234 },
      { $set: { rating } }
    );
    output = { message: "success" };
  } catch (err) {
    console.log("Error occurred", err);
  } finally {
    sendResponseAndCloseConnection(client, output, res);
  }
};

// function to send the response and close the db connection
function sendResponseAndCloseConnection(client: any, output: any, res: any) {
  if (output && res) {
    console.log(
      `========================\nOUTPUT AS RECEIVED AND BEFORE SENDING\n==================\n`,
      output
    );
    res.status(SUCCESS).json(output);
  } else {
    res.status(SERVER_ERR).json({ msg: "Internal Server Error" });
  }

  // close the database connection after sending the response
  client.close();
}

// exports
export { connectDbAndRunQueries };