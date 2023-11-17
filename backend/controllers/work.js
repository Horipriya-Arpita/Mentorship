// controllers/work.js
/*import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getWorks = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    const query = `SELECT * FROM work WHERE userid = ?`;

    db.query(query, [userId], (err, data) => {
      if (err) return res.status(500).json(err);

      console.log("Fetched work data:", data);
      return res.status(200).json({ workdata: data });
    });
  });
};

export const addWork = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    const { company, startYear, endYear } = req.body;

    const query = `
      INSERT INTO work (userid, company, start_year, end_year)
      VALUES (?, ?, ?, ?)
    `;

    const values = [userId, company, startYear, endYear];

    try {
      await db.query(query, values);
      res.status(200).json("Work experience added successfully");
    } catch (error) {
      console.error("Error adding work experience:", error);
      res.status(500).json(error);
    }
  });
};*/

// work.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getWorkExperiences = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userid = userInfo.id;

    const q = 'SELECT wk.*, u.id AS userId, name FROM work AS wk JOIN users AS u WHERE u.id = ?';

    db.query(q, [userid], (err, data) => {
      if (err) return res.status(500).json(err);

      console.log("Fetched work data:", data);
      return res.status(200).json({ workdata: data });
    });
  });
};

export const addWorkExperience = (req, res) => {
  // ... (similar to addEducation)

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    const { experiences } = req.body;

    try {
      console.log("Received work experiences data:", experiences);
  
      for (const experienceData of experiences) {
        const query = `
          INSERT INTO work (userid, company, start_year, end_year)
          VALUES (?, ?, ?, ?)
        `;
  
        const values = [userId, experienceData.company, experienceData.startYear, experienceData.endYear];
  
        await db.query(query, values);
        console.log('Work experience added successfully');
      }
  
      const fetchQuery = 'SELECT wk.*, u.id AS userId, name FROM work AS wk JOIN users AS u WHERE u.id = ?';
      const fetchData = await db.query(fetchQuery, [userId]);
  
      console.log("Fetched work experience data after insertion:", fetchData);
  
      res.status(200).json("Work experiences added successfully");
      } catch (error) {
        console.error("Error adding work experiences:", error);
        res.status(500).json(error);
      }

  });
};

