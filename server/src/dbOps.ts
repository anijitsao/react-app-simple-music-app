// dependencies
import { Request, Response } from "express";
import { sendResponse } from "./helpers/sendResponse.js";

const { SUCCESS, SERVER_ERR } = process.env;

// handle request for welcome API
const getSongs = async (req: Request, res: Response) => {
  // default output
  let output: any = { message: "failed" };
  try {
    const data = await collection.find({}).toArray();
    output = [...data] || [];
  } catch (err) {
    console.log("Error occurred .. ", err);
  } finally {
    sendResponse(client, output, res);
  }
};

// handle request for /login API
const updateRating = async (req: Request, res: Response) => {
  let output = { message: "failed" };
  try {
    // destructing es6 style
    let { id, rating } = req.params;

    // avoid NaN while saving the rating
    let ratingToSave = isNaN(parseInt(rating)) ? 1 : parseInt(rating);

    const docs = await collection.updateOne(
      { _id: 1234 },
      { $set: { ratingToSave } }
    );
    output = { message: "success" };
  } catch (err) {
    console.log("Error occurred", err);
  } finally {
    sendResponse(client, output, res);
  }
};

// exports
export { getSongs, updateRating };
