import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getSession = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, sessionInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const sessionId = sessionInfo.id;

    console.log("sessionID: " + sessionId);

    const q = `SELECT s.*, u.id AS userId, name FROM session AS s JOIN users AS u ON (u.id = s.SessionID)`;

    db.query(q, [sessionId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
  
};
export const addDetails = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, sessionInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const sessionId = sessionInfo.id;

    console.log("Adding details for UserID: " + sessionId);

    const {
      Title,
      Mentor,
      Date,
      StartTime,
      EndTime,
      Audience,
      Link,
    } = req.body;

    const insertQuery = `
      INSERT INTO user_details (id, user_type, gender, bio, country, language)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      user_type = VALUES(user_type),
      gender = VALUES(gender),
      bio = VALUES(bio),
      country = VALUES(country),
      language = VALUES(language);
    `;

    const values = [
      Title,
      Mentor,
      Date,
      StartTime,
      EndTime,
      Audience,
      Link,
    ];

    try {
      await db.query(insertQuery, values);
      res.status(200).json("User details added successfully");
    } catch (error) {
      console.error("Error adding user details:", error);
      res.status(500).json(error);
    }
  });
};