// routes/educations.js
import express from "express";
import { getEducations, addEducation } from "../controllers/education.js";

const router = express.Router();

router.get("/", getEducations);
router.post("/add", addEducation);

export default router;
