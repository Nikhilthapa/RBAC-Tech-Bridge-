const {
  userLogin,
  userTransaction,
  addTransaction,
  updateTransaction,
  deleteTransactions,
  healthCheck,
} = require("../../controller");
const dashboard = require("../../controller/usercontroller/dashboard");
const userSignUp = require("../../controller/usercontroller/usersignup");
const { userAuth, authMiddleware } = require("../../middlewares");
const { rbacCheck } = require("../../middlewares/role.Auth");

const userRouter = require("express").Router();

userRouter.post("/login", userLogin);
// userRouter.post("/signup", userSignUp);
userRouter.get("/dashboard", authMiddleware, dashboard);
userRouter.get("/hello", healthCheck);

userRouter.get("/transactions", authMiddleware, userTransaction);
userRouter.post(
  "/add/transactions",
  authMiddleware,
  rbacCheck("create"),
  addTransaction
);
userRouter.put(
  "/update/transactions/:id",
  authMiddleware,
  rbacCheck("update"),
  updateTransaction
);
userRouter.delete("/del/transactions/:id", deleteTransactions);

// userRouter.get("/tasks", userAuth, task);

module.exports = userRouter;
