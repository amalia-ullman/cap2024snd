import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Post } from "/models/postsModel";

dotenv.config();

const app = express();
const port = 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.log("could not connect", err));

app.use(express.json());

app.get("/api/posts", (req, res) => {
  res.sendStatus(200);
});

app.get("/api/posts/:id", (req, res) => {
  res.sendStatus(200);
});

app.get("api/posts", (req, res) => {
  res.sendStatus(200);
});

app.put("/api/posts/:id", (req, res) => {
  res.sendStatus(200);
});

app.delete("api/posts/:id", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
