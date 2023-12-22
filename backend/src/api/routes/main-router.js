const express = require("express");
const { userRouter } = require("./user-routes");
const { trackRouter } = require("./track-routes");
const { authRouter } = require("./auth-route");

const mainRouter = express.Router();
mainRouter.use("/users", userRouter);
mainRouter.use("/tracks", trackRouter);
mainRouter.use("/auth", authRouter);

module.exports = { mainRouter };
