const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    // role: {
    //   type: String,
    //   enum: ["user", "admin"],
    //   default: "user",
    // },
    // favouriteTracks: [{ type: mongoose.Types.ObjectId, ref: "tracks" }],
  },
  {
    timestamps: true,
    collection: "users",
  }
);

userSchema.pre("save", function () {
  this.password = bcryptjs.hashSync(this.password, 10);
});

const User = mongoose.model("users", userSchema, "users");

module.exports = User;
