// imports dependencies
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// local file dependencies
import router from "./routes/music.routes.js";
import { httpLogger } from "./middlewares/httpLogger.middleware.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(httpLogger);

// serve the static pages
app.use(express.static(path.join(__dirname, "../../ui/dist")));

// different routes
app.use("/services", router);

app.use("/*splat", (req, res) => {
  res.redirect("/");
});

// listen
app.listen(process.env.PORT, () => {
  console.log("Server is running on ", process.env.PORT);
});
