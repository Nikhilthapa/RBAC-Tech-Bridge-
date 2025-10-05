const {
  userLogin,
  task,
  userTransaction,
  addTransaction,
  updateTransaction,
  deleteTransactions,
  healthCheck,
} = require("../../controller");
const dashboard = require("../../controller/usercontroller/dashboard");
const userSignUp = require("../../controller/usercontroller/usersignup");
const { userAuth } = require("../../middlewares");

const userRouter = require("express").Router();

userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignUp);
userRouter.get("/dashboard", dashboard);
userRouter.get("/hello", healthCheck);

userRouter.get("/transactions", userTransaction);
userRouter.post("/add/transactions", addTransaction);
userRouter.put("/update/transactions/:id", updateTransaction);
userRouter.delete("/del/transactions/:id", deleteTransactions);

// userRouter.get("/tasks", userAuth, task);

module.exports = userRouter;
