import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("test");
  res.json({ msg: "Cool" });
});

app.listen(
  PORT,
  () => `Server started in ${process.env.NODE_ENV} on port ${process.env.PORT}`
);
