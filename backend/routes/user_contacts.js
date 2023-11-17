// user_contacts.js
import express from "express";
import { getContacts, addContacts } from "../controllers/user_contact.js";

const router = express.Router();

router.get("/", getContacts); 
router.post("/add", addContacts);

export default router;
