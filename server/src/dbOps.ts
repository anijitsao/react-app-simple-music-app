// dependencies
import { Request, Response } from "express";
import { sendResponse } from "./helpers/sendResponse.js";
import {
  createConnectionToDB,
  closeConnectionToDB,
  convertToObjectId,
  selectDB,
} from "./helpers/dbHelper.js";

const COLLECTION_MUSIC = <string>process.env.COLLECTION_MUSIC;
const SUCCESS = <string>process.env.SUCCESS;
const SERVER_ERR = <string>process.env.SERVER_ERR;

// handle request for welcome API
const getSongs = async (req: Request, res: Response) => {
  // default output
  let output: object = { message: "failed" };
  const dbClient = createConnectionToDB();
  try {
    const db = selectDB(dbClient);
    const data = await db.collection(COLLECTION_MUSIC).find({}).toArray();
    output = [...data] || [];
    sendResponse(SUCCESS, output, res);
  } catch (err) {
    console.log("Error occurred .. ", err);
    output = { ...output, error: JSON.stringify(err) };
    sendResponse(SERVER_ERR, output, res);
  } finally {
    await closeConnectionToDB(dbClient);
  }
};

// handle request for /login API
const updateRating = async (req: Request, res: Response) => {
  let output: object = { message: "failed" };
  const dbClient = createConnectionToDB();

  try {
    // destructing es6 style
    let { id, rating } = req.params;
    console.log("id and rating", id, rating);
    

    // avoid NaN while saving the rating
    let ratingToSave = isNaN(parseInt(rating)) ? 1 : parseInt(rating);
    let objectId = convertToObjectId(id);

    const db = selectDB(dbClient);
    const docs = await db
      .collection(COLLECTION_MUSIC)
      .updateOne({ _id: objectId }, { $set: { ratingToSave } });
    output = { message: "success" };
    sendResponse(SUCCESS, output, res);
  } catch (err) {
    console.log("Error occurred", err);
    output = { ...output, error: JSON.stringify(err) };
    sendResponse(SERVER_ERR, output, res);
  } finally {
    await closeConnectionToDB(dbClient);
  }
};

// exports
export { getSongs, updateRating };
