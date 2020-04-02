const dotenv = require("dotenv");
const express = require("express");
const bootcampRouter = require("./routes/bootcamp");
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.use("api/v1/bootcamp/", bootcampRouter);

app.listen(
  PORT,
  () => `Server started in ${process.env.NODE_ENV} on port ${process.env.PORT}`
);
