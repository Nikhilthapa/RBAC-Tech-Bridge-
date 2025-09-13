const { ApiError } = require("../../errorhandling");
const { getActionsForRole } = require("../../middlewares");
const { tasks } = require("../../utils/data");

const createtask = (req, res) => {
  try {
    let nextTaskId = tasks.length;
    const { title } = req.body || {};
    if (!title) {
      throw new ApiError(400, "title is required");
    }
    // console.log(req.user.id);
    let newTask = { id: ++nextTaskId, title, ownerId: req.user.id };
    tasks.push(newTask);
    return res.status(201).json(newTask);
  } catch (error) {
    throw new ApiError(400, error.message);
  }
};
const getTask = (req, res) => {
  const roleActions = getActionsForRole(req.user.role, "tasks");
  //   console.log("()()(", roleActions);

  const canReadAny = roleActions.includes("read");

  if (canReadAny) return res.json(tasks);

  // else read:own
  const own = tasks.filter((t) => t.ownerId === req.user.id);
  return res.json(own);
};
const updateTaskById = (req, res, next) => {
  try {
    const taskId = Number(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    console.log(task);

    if (!task) return next(new ApiError(404, "Task not found"));

    // Only Admin can update any task
    if (req.user.role !== "admin" && task.ownerId !== req.user.id) {
      return next(new ApiError(403, "Forbidden: cannot update others' tasks"));
    }

    const { title } = req.body || {};
    if (!title) return next(new ApiError(400, "Title is required"));

    task.title = title;

    return res.json({ success: true, task });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const deleteTaskById = (req, res) => {
  const taskId = Number(req.params.id);
  const idx = tasks.findIndex((t) => t.id === taskId);
  if (idx === -1) return res.status(404).json({ error: "Task not found" });

  const deleted = tasks.splice(idx, 1)[0];
  return res.json({ message: "Task deleted", task: deleted });
};
module.exports = { createtask, getTask, updateTaskById, deleteTaskById };
