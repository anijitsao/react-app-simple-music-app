// npm dependencies
import { MongoClient, ObjectId } from "mongodb";
const { DB_NAME, SUCCESS, SERVER_ERR } = process.env;
const URI_TO_CONNECT_MONGODB = process.env.URI_TO_CONNECT_MONGODB;
const COLLECTION_MUSIC = process.env.COLLECTION_MUSIC;
const createConnectionToDB = () => {
    return new MongoClient(URI_TO_CONNECT_MONGODB);
};
const closeConnectionToDB = async (dbClient) => {
    await dbClient.close();
};
const selectDB = (dbClient, dbName = DB_NAME) => {
    return dbClient.db(dbName);
};
const convertToObjectId = (strId) => new ObjectId(strId);
export { createConnectionToDB, closeConnectionToDB, selectDB, convertToObjectId, };
