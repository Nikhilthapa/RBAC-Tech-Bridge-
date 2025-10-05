const dashboard = (req, res, next) => {
  try {
    let data = {
      categoryExpenses: [
        { category: "Food", amount: 450 },
        { category: "Transport", amount: 200 },
        { category: "Entertainment", amount: 150 },
        { category: "Utilities", amount: 300 },
        { category: "Shopping", amount: 250 },
      ],
      monthlyTrends: [
        { month: "Jan", income: 3000, expenses: 2200 },
        { month: "Feb", income: 3200, expenses: 2400 },
        { month: "Mar", income: 3100, expenses: 2100 },
        { month: "Apr", income: 3300, expenses: 2500 },
        { month: "May", income: 3400, expenses: 2300 },
        { month: "Jun", income: 3500, expenses: 2600 },
      ],
      incomeVsExpense: { income: 1950, expenses: 1410 },
      totalBalance: 5400,
    };
    res.status(200).json({
      data,
    });
    return data;
  } catch (error) {}
};

module.exports = dashboard;
