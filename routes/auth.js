import express from "express";
const authRouter = express.Router();
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

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
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ username, password: hashedPassword });
    res
      .status(201)
      .json({ user: { id: result._id, username: result.username } });
  } catch (err) {
    res.send(err).status(500);
  }
});

authRouter.get("/", (req, res) => {
  res.send("hello");
});

authRouter.post("/login", async (req, res) => {
  console.log("hit");
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "All fields required" });
  }
  try {
    const existingUser = await User.findOne({ username });

    console.log(existingUser);
    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      // res.status(201).json({
      //   user: { id: existingUser._id, username: existinguser.username }
      // });
      if (isValidPassword) {
        res.status(201).json({ existingUser });
      } else {
        return res
          .status(400)
          .json({ error: "Username or password is invalid" });
      }
    } else {
      return res.status(400).json({ error: "Username or password is invalid" });
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

export { authRouter };
