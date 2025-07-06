import express from "express";
const postRouter = express.Router();
import { Post } from "../models/postsModel.js";
import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  try {
    const decodedValue = jwt.verify(token, process.env.SECRET);
    req.user = decodedValue;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

postRouter.get("/", async (req, res) => {
  try {
    const result = await Post.find().sort({ createdAt: -1 });
    console.log(result);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

postRouter.post("/", auth, async (req, res) => {
  try {
    const author = {
      name: req.user.userId,
      age: 21,
      pfp: ""
    };
    req.body.author = author;
    const result = await Post.create(req.body);
    res.send(result).status(200);
    console.log(req.body);
    console.log(req.user);
  } catch (err) {
    res.send(err).status(500);
  }
});

postRouter.get("/:id", async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

postRouter.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.author.name.toString() === req.user.userId) {
      const result = await Post.findByIdAndDelete(req.params.id);
      res.send(result).status(200);
    } else {
      res.status(401).json({ error: "error, unauthorized" });
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

postRouter.put("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.author.name.toString() === req.user.userId) {
      const result = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.send(result).status(200);
    } else {
      res.status(401).json({ error: "error, unauthorized" });
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

export { postRouter };
