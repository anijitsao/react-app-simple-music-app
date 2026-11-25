// imports dependencies
import { Router } from "express";

// local file dependencies
import { getSongs, updateRating } from "../services/music.service.js";
const router = Router();

router.get("/getsongs", (req, res) => {
  getSongs(req, res);
});

router.put("/updaterating/:id/:rating", (req, res) => {
  updateRating(req, res);
});

export default router;
