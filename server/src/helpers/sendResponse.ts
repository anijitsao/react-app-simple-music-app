import { Response } from "express";

export function sendResponse(
  statusCode: string,
  responseBody: object,
  res: Response
) {
  res.status(Number(statusCode)).json(responseBody);
}
