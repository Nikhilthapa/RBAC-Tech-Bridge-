const {
  createtask,
  getTask,
  updateTaskById,
  deleteTaskById,
} = require("./usercontroller/gettasks");
const userLogin = require("./usercontroller/userlogin");
const {
  userTransaction,
  addTransaction,
  updateTransaction,
  deleteTransactions,
} = require("./usercontroller/usertransaction");

module.exports = {
  userLogin: userLogin,
  // createtask: createtask,
  // getTask: getTask,
  // updateTaskById: updateTaskById,
  // deleteTaskById: deleteTaskById,
  userTransaction: userTransaction,
  addTransaction: addTransaction,
  updateTransaction: updateTransaction,
  deleteTransactions: deleteTransactions,
};
