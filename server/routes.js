// imports dependencies
import { Router } from "express"

// local file dependencies
import { connectDbAndRunQueries } from "./dbOps.js"
const router = Router()

router.get("/getsongs", (req, res) => {
	connectDbAndRunQueries("getSongs", req, res)
})

router.put("/updaterating/:id/:rating", (req, res) => {
	connectDbAndRunQueries("updateRating", req, res)
})

export default router
