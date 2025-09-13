/*function getActionsForRole(roleName, moduleName) {
  const role = roles[roleName];
  if (!role) return [];
  const mod = role.find((m) => m.module === moduleName);
  return mod ? mod.actions : [];
}

function rbacCheck(actionBase, options = {}) {
  const moduleName = options.module || "tasks";
  const requireAny = options.requireAny || false;
  console.log(requireAny);

  return (req, res, next) => {
    const roleName = req.user.role;
    const actions = getActionsForRole(roleName, moduleName);
    console.log("()()", actions);

    const anyAction = `${actionBase}:any`;
    const ownAction = `${actionBase}:own`;
    const simpleAction = actionBase; // e.g. create

    if (actions.includes(simpleAction)) return next();

    if (requireAny) {
      if (actions.includes(anyAction)) return next();
      return res
        .status(403)
        .json({ error: "Forbidden: insufficient permissions" });
    }

    // allow if role has either specific any or own
    if (actions.includes(anyAction) || actions.includes(ownAction))
      return next();

    return res
      .status(403)
      .json({ status: false, error: "Forbidden: insufficient permissions" });
  };
}
module.exports = rbacCheck;*/

const { roles, tasks } = require("../utils/data");

function getActionsForRole(roleName, moduleName) {
  const role = roles[roleName];
  if (!role) return [];
  const mod = role.find((m) => m.module === moduleName);
  return mod ? mod.actions : [];
}

function rbacCheck(action) {
  return (req, res, next) => {
    const { role, id } = req.user;

    const rolePermissions = roles[role].find((r) => r.module === "tasks");

    const allowed = rolePermissions.actions;

    if (action === "read") {
      if (allowed.includes("read")) return next();
      //   if (allowed.includes("read:own")) return next();
    }
    if (action === "update" || action === "delete") {
      if (allowed.includes(`${action}`)) return next();
      //this logic for own update
      //   if (allowed.includes(`${action}`)) {
      //     // Check owner for update
      //     const task = tasks.find((t) => t.id == req.params.id);
      //     if (!task) return res.status(404).json({ error: "Task not found" });
      //     if (task.ownerId != id)
      //       return res.status(403).json({ error: "Forbidden" });
      //     return next();
      //   }
    }
    if (action == "create" && allowed.includes("create")) return next();
    return res.status(403).json({ error: "Forbidden" });
  };
}
module.exports = { rbacCheck, getActionsForRole };
