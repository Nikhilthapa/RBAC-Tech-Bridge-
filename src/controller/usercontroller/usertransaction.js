const { transactionData } = require("../../utils/data");

const userTransaction = (req, res, next) => {
  try {
    let data = transactionData;
    if (req.user.role == "user") {
      data = data.filter((id) => id.userId == req.user.id);
    }
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

const updateTransaction = (req, res, next) => {
  try {
    for (let i = 0; i < transactionData.length; i++) {
      if (transactionData[i].id == req.params.id) {
        transactionData[i] = req.body;
      }
    }
    res.status(201).json({ status: true });
  } catch (error) {}
};
const deleteTransactions = (req, res, next) => {
  try {
    transactionData = transactionData.filter((id) => id.id == req.params.id);
    res.status(201).json({
      status: true,
    });
  } catch (error) {}
};
const addTransaction = (req, res, next) => {
  try {
    transactionData.push(req.body);
    res.status(201).json({
      status: true,
      messsage: "Transaction added",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  userTransaction,
  addTransaction,
  updateTransaction,
  deleteTransactions,
};
