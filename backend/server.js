import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import userDetailsRoutes from "./routes/user_details.js"
import skillSetRoutes from "./routes/skills.js"
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/user_details",userDetailsRoutes);
app.use("/api/skill_set", skillSetRoutes);


app.listen(8800, () => {
  console.log("API working!");
});
