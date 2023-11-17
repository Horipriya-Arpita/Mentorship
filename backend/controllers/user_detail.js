// user_detail.js
/*import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getDetails = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        const userid = userInfo.id;

        console.log("wowww"+ userid);
    
        const q = `SELECT ud.*, u.id AS userId, name FROM user_details AS ud JOIN users AS u ON (u.id = ud.id) WHERE u.id = ?`;

        db.query(q, [userid], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });

    });
}
*/
// user_detail.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getDetails = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    console.log("UserID: " + userId);

    const q = `SELECT ud.*, u.id AS userId, name FROM user_details AS ud JOIN users AS u ON (u.id = ud.id) WHERE u.id = ?`;

    db.query(q, [userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addDetails = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    console.log("Adding details for UserID: " + userId);

    const { user_type, gender, bio, country, language } = req.body;

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

    const values = [userId, user_type, gender, bio, country, language];

    try {
      await db.query(insertQuery, values);
      res.status(200).json("User details added successfully");
    } catch (error) {
      console.error("Error adding user details:", error);
      res.status(500).json(error);
    }
  });
};
