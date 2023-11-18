import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getProfileFlexbox = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    console.log("UserID: " + userId);

    // const q = `SELECT ud.*, u.id AS userId, name, profile_pic, s.skill_name
    // FROM user_details AS ud
    // JOIN users AS u ON u.id = ud.id
    // JOIN skill_set AS s ON s.userid = u.id`;

    const q = `
  SELECT
    ud.*, 
    u.id AS userId, 
    u.name, 
    u.email,
    u.username,
    GROUP_CONCAT(s.skill_name) AS skills
  FROM 
    users AS u
  LEFT JOIN 
    user_details AS ud ON u.id = ud.id
  LEFT JOIN 
    skill_set AS s ON u.id = s.userid
  GROUP BY
    u.id
`;


    db.query(q, [userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
