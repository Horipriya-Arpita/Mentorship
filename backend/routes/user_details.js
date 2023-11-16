// user_details.js
import express from "express";
import { getDetails, addDetails } from "../controllers/user_detail.js";

const router = express.Router();

router.get("/", getDetails); 
router.post("/add", addDetails);

export default router;
