import express from "express";
import { getSkills } from "../controllers/skill.js";

const router = express.Router();

router.get("/", getSkills); 

export default router;