import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import userDetailsRoutes from "./routes/user_details.js"
import skillSetRoutes from "./routes/skills.js"
import userContactRoutes from "./routes/user_contacts.js"
import relationshipRoutes from "./routes/relationships.js"
import profileFlexboxRoutes from "./routes/profile_flexboxs.js"
import workRoutes from "./routes/works.js";
import educationRoutes from "./routes/educations.js";
import sessionsRoutes from ".routes/sessions.js"

import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use("/upload", express.static("frontend/public/upload"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/user_details",userDetailsRoutes);
app.use("/api/skill_set", skillSetRoutes);
app.use("/api/user_contacts", userContactRoutes);
app.use("/api/relationships", relationshipRoutes);
app.use("/api/profile_flexboxs", profileFlexboxRoutes);
app.use("/api/works", workRoutes);
app.use("/api/educations", educaationRoutes);
app.use("/api/relationships", relationshipRoutes);
app.use("/api/profile_flexboxs", profileFlexboxRoutes);
app.use("/api/works", workRoutes);
app.use("/api/educations", educationRoutes);
app.use("api/sessions", sessionsRoutes);

app.listen(8800, () => {
  console.log("API working!");
});