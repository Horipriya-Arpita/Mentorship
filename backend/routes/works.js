// routes/works.js
import express from "express";
import { getWorkExperiences, addWorkExperience } from "../controllers/work.js";

const router = express.Router();

router.get("/", getWorkExperiences);
router.post("/add", addWorkExperience);

export default router;
