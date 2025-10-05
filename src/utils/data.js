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

let userSignData = {};
let transactionData = [
  {
    id: "1",
    amount: 50,
    category: "Food",
    type: "expense",
    description: "Grocery shopping",
    date: "2025-01-15",
    userId: "userqwert12",
  },
  {
    id: "2",
    amount: 3000,
    category: "Salary",
    type: "income",
    description: "Monthly salary",
    date: "2025-01-01",
    userId: "userqwtyt12",
  },
  {
    id: "3",
    amount: 30,
    category: "Transport",
    type: "expense",
    description: "Uber ride",
    date: "2025-01-20",
    userId: "userqwght12",
  },
];
module.exports = {
  users,
  roles,
  tasks,
  nextTaskId,
  userSignData,
  transactionData,
};
