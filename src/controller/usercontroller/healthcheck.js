const healthCheck = (req, res, next) => {
  try {
    console.log("hitting");
    res.status(200).json({
      msg: "hello From the APi",
    });
    // res.send(ok);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = healthCheck;
