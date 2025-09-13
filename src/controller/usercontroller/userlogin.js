const { ApiError } = require("../../errorhandling");
const { signJwt } = require("../../utils");
const { roles, users } = require("../../utils/data");

const userLogin = (req, res, next) => {
  try {
    const { username, password } = req.body;
    let map = {};
    for (let i = 0; i < users.length; i++) {
      map[users[i].username] = {
        id: users[i].id,
        password: users[i].password,
        role: users[i].role,
      };
    }
    if (map[username] && map[username].password == password) {
      const data = {
        username: username,
        id: map[username].id,
        role: map[username].role,
      };
      const token = signJwt(data);
      res.status(200).json({ message: true, token: token });
    }
    console.log("not valid credential");

    return next(new ApiError(401, "Invalid credentials"));
  } catch (error) {
    return next(new ApiError(401, "Invalid credentials"));
  }
};
module.exports = userLogin;
