const express = require("express");
const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  updateUser,
  deleteAllUsers,
  deleteUserByID,
} = require("../controllers/user-controllers");
const { isAuth } = require("../../middlewares/auth");
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUserByID);
userRouter.delete("/", deleteAllUsers);

module.exports = { userRouter };
