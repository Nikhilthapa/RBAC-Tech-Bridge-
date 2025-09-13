const {
  createtask,
  getTask,
  updateTaskById,
  deleteTaskById,
} = require("../../controller");
const { authMiddleware, rbacCheck } = require("../../middlewares");

const taskRouter = require("express").Router();

taskRouter.post("/create", authMiddleware, rbacCheck("create"), createtask);

taskRouter.get("/gettask", authMiddleware, rbacCheck("read"), getTask);

taskRouter.put(
  "/update/:id",
  authMiddleware,
  rbacCheck("update"),
  updateTaskById
);

taskRouter.delete(
  "/delete/:id",
  authMiddleware,
  rbacCheck("read"),
  deleteTaskById
);
module.exports = taskRouter;
