const express = require("express");
const userRouter = require("./routes/user.js");
const orderRouter = require("./routes/order.js");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use("/v1/user", userRouter);
app.use("/v1/order", orderRouter);

module.exports = app;
