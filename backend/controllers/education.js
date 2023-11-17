// controllers/education.js
/*import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getEducations = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    const query = `SELECT * FROM education WHERE userid = ?`;

    db.query(query, [userId], (err, data) => {
      if (err) return res.status(500).json(err);

      console.log("Fetched education data:", data);
      return res.status(200).json({ educationdata: data });
    });
  });
};

export const addEducation = (req, res) => {
  /*const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    const { institution, degree, startYear, endYear } = req.body;

    const query = `
      INSERT INTO education (userid, institution, degree, start_year, end_year)
      VALUES (?, ?, ?, ?, ?)
    `;

    const values = [userId, institution, degree, startYear, endYear];

    try {
      await db.query(query, values);
      res.status(200).json("Education added successfully");
    } catch (error) {
      console.error("Error adding education:", error);
      res.status(500).json(error);
    }
  });
};*/

// education.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getEducations = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userid = userInfo.id;

    const q = 'SELECT ed.*, u.id AS userId, name FROM education AS ed JOIN users AS u WHERE u.id = ?';

    db.query(q, [userid], (err, data) => {
      if (err) return res.status(500).json(err);

      console.log("Fetched education data:", data);
      return res.status(200).json({ educationdata: data });
    });
  });
};

export const addEducation = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;

    const { educations } = req.body;

    try {
      console.log("Received educations data:", educations);

      for (const educationData of educations) {
        const query = `
          INSERT INTO education (userid, institution, degree, start_year, end_year)
          VALUES (?, ?, ?, ?, ?)
        `;

        const values = [userId, educationData.institution, educationData.degree, educationData.startYear, educationData.endYear];

        await db.query(query, values);
        console.log('Education added successfully');
      }

      const fetchQuery = 'SELECT ed.*, u.id AS userId, name FROM education AS ed JOIN users AS u WHERE u.id = ?';
      const fetchData = await db.query(fetchQuery, [userId]);

      console.log("Fetched education data after insertion:", fetchData);

      res.status(200).json("Education added successfully");
    } catch (error) {
      console.error("Error adding education:", error);
      res.status(500).json(error);
    }
  });
};

