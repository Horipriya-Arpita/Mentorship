// user_contact.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getContacts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userid = userInfo.id;

    console.log("wowww"+ userid);

    const q = `SELECT * FROM user_contacts WHERE userID = ?`;
    
    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log("Fetched contact data:", data);
      return res.status(200).json(data);
    });

  });

  
};
