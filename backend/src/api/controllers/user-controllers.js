const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    // .populate("favouriteTracks");
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.user._id.toString() !== id) {
      return res
        .status(400)
        .json("You cant modify someone that is not yourlelf.");
    }
    const oldUser = await User.findById(id);
    const neWUser = new User(req.body);
    neWUser._id = id;
    neWUser.favouriteTracks = [
      ...oldUser.favouriteTracks,
      ...neWUser.favouriteTracks,
    ];
    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true,
    });
    return res.status(200).json({ message: "User updated", userUpdated });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteUserByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteAllUsers = async (req, res, next) => {
  try {
    const deletedUsers = await User.deleteMany({});
    console.log(`${deletedUsers.deletedCount} users deleted`);

    return res.status(200).json({ message: "All users delated" });
  } catch (error) {
    return res.status(400).json(error);
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserByID,
  deleteAllUsers,
};
