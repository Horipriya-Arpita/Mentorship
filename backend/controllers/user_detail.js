// user_detail.js
import { db } from "../connect.js";
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
