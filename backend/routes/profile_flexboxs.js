// profile_flexbox.js
import express from "express";
import { getProfileFlexbox } from "../controllers/profile_flexbox.js";

const router = express.Router();

router.get("/", getProfileFlexbox); 

export default router;
