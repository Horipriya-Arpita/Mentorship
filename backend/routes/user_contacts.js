// user_contacts.js
import express from "express";
import { getContacts } from "../controllers/user_contact.js";

const router = express.Router();

router.get("/", getContacts); 

export default router;
