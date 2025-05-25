import express from "express";
const authRouter = express.Router();
import { User } from "../models/userModel.js";

authRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken" });
    }
    const result = await User.create({ username, password });
    res
      .status(201)
      .json({ user: { id: result._id, username: result.username } });
  } catch (err) {
    res.send(err).status(500);
  }
});

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "All fields required" });
  }
  try {
    const existingUser = User.findOne({ username });
    console.log(existingUser.username);
    console.log(existingUser.password);
    if (existingUser && existingUser.password == req.body.password) {
      res
        .status(201)
        .json({ user: { id: result._id, username: result.username } });
    } else {
      return res.status(400).json({ error: "Username or password is invalid" });
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

export { authRouter };
