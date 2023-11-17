// user_detail.js
/*import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getSkills = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        const userid = userInfo.id;

        console.log("wowww"+ userid);
    
        const q = `SELECT ss.*, u.id AS userId, name FROM skill_set AS ss JOIN users AS u ON (u.id = ss.id) WHERE u.id = ?`;

        db.query(q, [userid], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });

    });
}
*/
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getSkills = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userid = userInfo.id;

    const q = `SELECT ss.*, u.id AS userId, name FROM skill_set AS ss JOIN users AS u WHERE u.id = ?`;

    db.query(q, [userid], (err, data) => {
      if (err) return res.status(500).json(err);

      console.log("Fetched skills data:", data);
      // Ensure you send the result with the correct property name
      return res.status(200).json({ skilldata: data });
    });
  });
};
/*
export const addSkill = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q = "INSERT INTO skill_set (userid, skill_name, skill_level) VALUES (?)";
      
      const values = [
        userInfo.id,
        req.body.skill_name,
        req.body.skill_level,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Skill has been created.");
      });
    });
  };
*/
// controllers/skill.js
// ... (previous code)

/*export const addSkill = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    const { skillName } = req.body;

    console.log(skillName);

    // Set skillLevel to null if not provided
    const skillLevel = null;

    const query = `
      INSERT INTO skill_set (userid, skill_name, skill_level)
      VALUES (?, ?, ?)
    `;

    const values = [userId, skillName, skillLevel];

    try {
      await db.query(query, values);
      console.log("Skill added successfully");

      // Fetch the updated skills data
      const fetchQuery = `SELECT ss.*, u.id AS userId, name FROM skill_set AS ss JOIN users AS u WHERE u.id = ?`;
      const fetchData = await db.query(fetchQuery, [userId]);

      console.log("Fetched skills data after insertion:", fetchData);

      res.status(200).json("Skill added successfully");
    } catch (error) {
      console.error("Error adding skill:", error);
      res.status(500).json(error);
    }
  });
};
*/

export const addSkill = (req, res) => {
  
}