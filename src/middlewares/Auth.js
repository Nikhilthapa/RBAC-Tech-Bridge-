// const { threadCpuUsage } = require("process");
const { threadCpuUsage } = require("process");
const { ApiError } = require("../errorhandling");
const { verifyJwt } = require("../utils");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Missing or invalid Authorization header");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = verifyJwt(token);
    req.user = payload;

    return next();
  } catch (err) {
    throw new ApiError(401, "Invalid or expired token");
  }
}
module.exports = authMiddleware;
