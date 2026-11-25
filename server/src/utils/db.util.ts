// npm dependencies
import { MongoClient, ObjectId } from "mongodb";

const { DB_NAME, SUCCESS, SERVER_ERR } = process.env;
const URI_TO_CONNECT_MONGODB = <string>process.env.URI_TO_CONNECT_MONGODB;
const COLLECTION_MUSIC = <string>process.env.COLLECTION_MUSIC;

const createConnectionToDB = () => {
  return new MongoClient(URI_TO_CONNECT_MONGODB);
};

const closeConnectionToDB = async (dbClient: MongoClient) => {
  await dbClient.close();
};

const selectDB = (dbClient: MongoClient, dbName = DB_NAME) => {
  return dbClient.db(dbName);
};

const convertToObjectId = (strId: string) => new ObjectId(strId);

export {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
  convertToObjectId,
};
