const { roles, tasks } = require("../utils/data");

// function getActionsForRole(roleName, moduleName) {
//   const role = roles[roleName];
//   if (!role) return [];
//   const mod = role.find((m) => m.module === moduleName);
//   return mod ? mod.actions : [];
// }

function rbacCheck(action) {
  return (req, res, next) => {
    const { role, id } = req.user; // req.user must be set by auth middleware
    const module = "tasks"; // default module

    // Check permission
    const allowed = hasPermission(role, module, action);
    if (!allowed) return res.status(403).json({ error: "Forbidden" });

    // Optional: ownership check for update/delete
    if ((action === "update" || action === "delete") && role !== "admin") {
      const task = tasks.find((t) => t.id === req.params.id);
      if (!task) return res.status(404).json({ error: "Task not found" });
      if (task.ownerId !== id)
        return res.status(403).json({ error: "Forbidden: Not owner" });
    }
    next();
  };
}
module.exports = { rbacCheck };
