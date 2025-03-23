import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.log("could not connect", err));

app.use(express.json());

app.get("/", (req, res) => {
  console.log("get request made");
  res.send("hello");
});

app.get("/:id", (req, res) => {
  console.log("req.params: ", req.params);

  res.sendStatus(200);
});

app.post("/new", (req, res) => {
  const data = req.body;
  console.log("data captured from request: ", data);
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
