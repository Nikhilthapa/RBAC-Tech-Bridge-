const jwt = require("jsonwebtoken");

const signJwt = (data) => {
  try {
    return jwt.sign(data, "secret");
  } catch (error) {}
};
module.exports = signJwt;
