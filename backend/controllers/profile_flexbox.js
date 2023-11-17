/* import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getProfileFlexbox = async (req, res) => {
  const token = req.cookies.accessToken;

  console.log(token);

  if (!token) {
    return res.status(401).json("Not logged in!");
  }

  try {
    jwt.verify(token, "secretkey", async (err, userInfo) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      const userId = userInfo.id;

      console.log("eida ki?"+ userId);

      // Fetch user details
      const userDetailsQuery = `SELECT ud.*, u.id AS userId, name, profile_pic FROM user_details AS ud JOIN users AS u ON (u.id = ud.id) WHERE u.id = ?`;
      const userDetailsResult = await db.query(userDetailsQuery, [userId]);

      if (userDetailsResult.length === 0) {
        return res.status(404).json("User not found!");
      }

      const userDetails = userDetailsResult[0];

      // Fetch user skills
      const userSkillsQuery = `SELECT skill_name FROM skill_set WHERE userid = ?`;
      const userSkillsResult = await db.query(userSkillsQuery, [userId]);

      const userSkills = userSkillsResult.map((skillData) => skillData.skill_name);

      // Combine user details and skills
      const userData = { ...userDetails, skills: userSkills };

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving user details!");
  }
};

*/

// user_detail.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getProfileFlexbox = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    console.log("UserID: " + userId);

    const q = `SELECT ud.*, u.id AS userId, name, profile_pic, s.skill_name
    FROM user_details AS ud
    JOIN users AS u ON u.id = ud.id
    JOIN skill_set AS s ON s.userid = u.id`;

    db.query(q, [userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};