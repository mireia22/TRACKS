const User = require("../api/models/user-model");
const { verifyToken } = require("../utils/jwt");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const parsedToken = token.replace("Bearer ", "");

    const { id } = verifyToken(parsedToken);
    const user = await User.findById(id);
    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Youre not authorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const parsedToken = token.replace("Bearer ", "");

    const { id } = verifyToken(parsedToken);
    const user = await User.findById(id);

    if (user.rol === "admin") {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json("This action is only allowed to admins");
    }
  } catch (error) {
    return res.status(400).json({ message: "Youre not authorized" });
  }
};

module.exports = { isAuth, isAdmin };
