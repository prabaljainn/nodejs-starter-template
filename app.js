const express = require("express");
const userRouter = require("./routes/user.js");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use("/v1/user", userRouter);

module.exports = app;
