const jwt = require("jsonwebtoken");

const verifyJwt = (token) => {
  try {
    return jwt.verify(token, "secret");
  } catch (error) {}
};

module.exports = verifyJwt;
