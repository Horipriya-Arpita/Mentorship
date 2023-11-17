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


export const addContacts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(403).json("Token is not valid!");
    }

    const userId = userInfo.id;

    console.log("Adding contacts for UserID: " + userId);

    const { linkedin, facebook, twitter, github } = req.body;

    console.log("Received data:", req.body);

    const insertQuery = `
      INSERT INTO user_contacts (userLinkedin, userFacebook, userX, userGithub, userID)
      VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      userLinkedin = VALUES(userLinkedin),
      userFacebook = VALUES(userFacebook),
      userX = VALUES(userX),
      userGithub = VALUES(userGithub),
      userID = VALUES(userID);
    `;

    const values = [linkedin, facebook, twitter, github, userId];

    db.query(insertQuery, values, (err) => {
      if (err) {
        console.error("Error adding user contacts:", err);
        return res.status(500).json(err);
      }

      console.log("User contacts added successfully");
      res.status(200).json("User contacts added successfully");
    });
  });
};