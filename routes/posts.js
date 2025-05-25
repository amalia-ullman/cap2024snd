import express from "express";
const postRouter = express.Router();
import { Post } from "../models/postsModel";

postRouter.get("/", async (req, res) => {
  try {
    const result = await Post.find().sort({ createdAt: -1 });
    console.log(result);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

postRouter.post("/", async (req, res) => {
  try {
    const result = await Post.create(req.body);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

postRouter.get("/:id", async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    res.send(result).status(200);
  } catch (erre) {
    res.send(err).status(500);
  }
});

postRouter.delete("/:id", async (req, res) => {
  try {
    const result = await Post.findByIdAndDelete(req.params.id);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

postRouter.put("/:id", async (req, res) => {
  try {
    const result = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("body", req.body);
    console.log("Params id", req.params.id);
    console.log("Result", result);
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

export { postRouter };
