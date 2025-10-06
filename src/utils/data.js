const users = [
  {
    id: "techBridge@1",
    email: "admin@techBridge.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "techBridge@2",
    email: "user1@techBridge.com",
    password: "user123",
    role: "user",
  },
  {
    id: "techBridge@3",
    email: "userview@techBridge.com",
    password: "userview123",
    role: "readonly",
  },
];

const roles = {
  admin: [
    {
      module: "tasks",
      actions: ["create", "read", "update", "delete"],
    },
  ],
  readonly: [
    {
      module: "tasks",
      actions: ["read"],
    },
  ],
  user: [
    {
      module: "tasks",
      actions: ["create", "read", "update", "delete"],
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
    amount: 2500,
    category: "Freelance",
    type: "income",
    description: "Project payment",
    date: "2025-02-05",
    userId: "techBridge@3",
  },
  {
    id: "2",
    amount: 75,
    category: "Food",
    type: "expense",
    description: "Dinner at restaurant",
    date: "2025-02-06",
    userId: "techBridge@1",
  },
  {
    id: "3",
    amount: 120,
    category: "Utilities",
    type: "expense",
    description: "Electricity bill",
    date: "2025-02-02",
    userId: "techBridge@2",
  },
  {
    id: "4",
    amount: 3200,
    category: "Salary",
    type: "income",
    description: "Monthly salary",
    date: "2025-02-01",
    userId: "techBridge@1",
  },
  {
    id: "5",
    amount: 40,
    category: "Transport",
    type: "expense",
    description: "Bus fare",
    date: "2025-02-07",
    userId: "techBridge@2",
  },
  {
    id: "6",
    amount: 200,
    category: "Entertainment",
    type: "expense",
    description: "Concert ticket",
    date: "2025-02-09",
    userId: "techBridge@3",
  },
  {
    id: "7",
    amount: 150,
    category: "Groceries",
    type: "expense",
    description: "Weekly grocery shopping",
    date: "2025-02-04",
    userId: "techBridge@2",
  },
  {
    id: "8",
    amount: 60,
    category: "Transport",
    type: "expense",
    description: "Cab ride",
    date: "2025-02-03",
    userId: "techBridge@1",
  },
  {
    id: "9",
    amount: 500,
    category: "Investment",
    type: "income",
    description: "Stock dividends",
    date: "2025-02-08",
    userId: "techBridge@3",
  },
  {
    id: "10",
    amount: 90,
    category: "Health",
    type: "expense",
    description: "Pharmacy purchase",
    date: "2025-02-10",
    userId: "techBridge@1",
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
