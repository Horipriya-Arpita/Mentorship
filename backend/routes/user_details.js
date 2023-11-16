// user_details.js
import express from "express";
import { getDetails } from "../controllers/user_detail.js";

const router = express.Router();

router.get("/", getDetails); 

export default router;
