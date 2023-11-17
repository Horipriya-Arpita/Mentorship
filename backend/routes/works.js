// routes/works.js
import express from "express";
import { getWorks, addWork } from "../controllers/work.js";

const router = express.Router();

router.get("/", getWorks);
router.post("/add", addWork);

export default router;
