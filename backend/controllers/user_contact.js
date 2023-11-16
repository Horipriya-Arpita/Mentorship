// user_contact.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUserContacts = (req, res) => {
  const userId = req.query.userId; // Assuming you pass userId as a query parameter
  const token = req.cookies.accessToken;
  
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = `SELECT * FROM userContacts WHERE userID = ?`; // Query to fetch userContacts

    const values = [userId || userInfo.id]; // Use userId from query parameter or userInfo.id from token

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
