const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "manager", password: "manager123", role: "manager" },
  { id: 3, username: "user", password: "user123", role: "user" },
];

const roles = {
  admin: [
    {
      module: "tasks",
      actions: ["create", "read", "update", "delete"],
    },
    {
      module: "users",
      actions: ["create", "read", "update", "delete"], // example extra module
    },
  ],
  manager: [
    {
      module: "tasks",
      actions: ["create", "read", "update"],
    },
  ],
  user: [
    {
      module: "tasks",
      actions: ["create", "read", "update"],
    },
  ],
};

let tasks = [
  { id: 1, title: "Setup Project", ownerId: 2 },
  { id: 2, title: "Fix Bug", ownerId: 3 },
];
let nextTaskId = 3;
module.exports = { users, roles, tasks, nextTaskId };
