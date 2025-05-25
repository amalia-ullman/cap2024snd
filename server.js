import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Post } from "./models/postsModel.js";
import cors from "cors";
import { postRouter } from "./routes/posts.js";
import { authRouter } from "./routes/auth.js";

dotenv.config();

const app = express();
const port = 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.log("could not connect", err));

app.use(cors());

app.use(express.json());

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
