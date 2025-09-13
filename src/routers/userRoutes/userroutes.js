const { userLogin, task } = require("../../controller");
const { userAuth } = require("../../middlewares");

const userRouter = require("express").Router();

userRouter.post("/login", userLogin);

// userRouter.get("/tasks", userAuth, task);

module.exports = userRouter;
