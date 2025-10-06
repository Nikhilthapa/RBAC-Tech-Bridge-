const { ApiError } = require("../../errorhandling");
const { signJwt } = require("../../utils");
const { roles, users, userSignData } = require("../../utils/data");

const userLogin = (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role)
      return next(new ApiError(401, "Invalid Request"));
    console.log(role);

    let foundUser = users.find((id) => id.email == email);
    console.log(foundUser);

    if (
      !foundUser &&
      foundUser.password !== password.trim() &&
      foundUser.role !== role
    ) {
      return next(new ApiError(401, "account not found"));
    }
    const token = signJwt({ id: foundUser.id, role });
    res.status(200).json({
      token,
      user: { name: foundUser.name, role },
      status: true,
      message: "Logged In",
    });
    res.status(200).json({ message: true, token: token });
  } catch (error) {
    return next(new ApiError(401, "Invalid credentials"));
  }
};
module.exports = userLogin;
