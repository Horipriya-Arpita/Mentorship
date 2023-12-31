import express from "express";
import { getSkills, addSkill } from "../controllers/skill.js";

const router = express.Router();

router.get("/", getSkills); 
router.post("/add", addSkill);

export default router;