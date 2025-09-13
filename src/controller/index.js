const {
  createtask,
  getTask,
  updateTaskById,
  deleteTaskById,
} = require("./usercontroller/gettasks");
const userLogin = require("./usercontroller/userlogin");

module.exports = {
  userLogin: userLogin,
  createtask: createtask,
  getTask: getTask,
  updateTaskById: updateTaskById,
  deleteTaskById: deleteTaskById,
};
