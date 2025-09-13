const authMiddleware = require("./Auth");
const { rbacCheck, getActionsForRole } = require("./role.Auth");

module.exports = {
  authMiddleware: authMiddleware,
  rbacCheck: rbacCheck,
  getActionsForRole: getActionsForRole,
};
