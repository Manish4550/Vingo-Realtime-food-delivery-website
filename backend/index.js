import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";

dotenv.config();
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://quickbite-k7tg.onrender.com",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Sever is listing at ${port}`);
});
