// user_detail.js
import { db } from "../connect.js";

export const getDetails = (req, res) => {
    const q = `SELECT ud.*, u.id AS userId, name FROM user_details AS ud JOIN users AS u ON (u.id = ud.userid)`;

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}
