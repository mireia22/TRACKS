const { errorHandler } = require("../../utils/error");
const { generateToken } = require("../../utils/jwt");
const User = require("../models/user-model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const existingUserWithUsername = await User.findOne({ userName });
    if (existingUserWithUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const existingUserWithEmail = await User.findOne({ email });
    if (existingUserWithEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const newUser = new User({
      userName,
      email,
      password,
    });

    const savedUser = await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "User registered", savedUser });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const expiryDate = new Date(Date.now() + 3600000);
    const { password: userPassword, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ ...rest });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser };
