const express = require("express");
const { userRouter, taskRouter } = require("./routers");
const { errorHandler } = require("./errorhandling/error");
// const { userRouter } = require("./routers");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({
    success: false,
    status,
    message,
  });
});

module.exports = app;
