const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const authenticateUser = async (req, res, next) => {
  console.log("middleware called ");
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("token is ", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = await User.findById(decoded.id).select("-password");
    if (!req.userId) {
      return res
        .status(404)
        .json({ message: "User not found , failed to authorize " });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "token is not valid " });
  }
};
module.exports = authenticateUser;
