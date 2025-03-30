import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Post } from "./models/postsModel.js";

dotenv.config();

const app = express();
const port = 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.log("could not connect", err));

app.use(express.json());

app.get("/api/posts", async (req, res) => {
  try {
    const result = await Post.find();
    console.log(result);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const result = await Post.create(req.body);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.get("/api/posts/:id", async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    res.send(result).status(200);
  } catch (erre) {
    res.send(err).status(500);
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const result = await Post.findByIdAndDelete(req.params.id);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
