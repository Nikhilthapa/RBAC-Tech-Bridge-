const { ApiError } = require("../../errorhandling");
const { signJwt } = require("../../utils");
const { userSignData } = require("../../utils/data");

const userSignUp = (req, res, next) => {
  try {
    // console.log("getting trigger");
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role)
      return next(new ApiError(401, "Invalid Request"));
    if (userSignData[email]) {
      return next(new ApiError(400, "Email Already Present"));
    }
    userSignData[email] = {
      name,
      password,
      role,
    };
    console.log(userSignData);
    const token = signJwt({ email, role });
    // console.log("this is token", token);

    res.status(200).json({
      token,
      user: { name, role },
      status: true,
      message: "signUp Done",
    });
  } catch (error) {
    return next(new ApiError(401, "Invalid credentials"));
  }
};

module.exports = userSignUp;
