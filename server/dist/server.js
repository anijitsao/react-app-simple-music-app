// imports dependencies
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// local file dependencies
import router from "./routes.js";
const app = express();
// middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
// serve the static pages
app.use(express.static(path.join(__dirname, "../../public/dist")));
// different routes
app.use("/services", router);
// listen
app.listen(process.env.PORT, () => {
    console.log("Server is running on ", process.env.PORT);
});
