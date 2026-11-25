import { type Request, type Response, type NextFunction } from "express";
export function httpLogger(req: Request, res: Response, next: NextFunction) {
  let startTime = Date.now();
  res.on("finish", () => {
    let endTime = Date.now();
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} ${endTime - startTime} ms`,
    );
  });

  // call the next middleware
  next();
}
