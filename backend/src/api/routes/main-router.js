const express = require("express");
const { userRouter } = require("./user-routes");
const { trackRouter } = require("./track-routes");

const mainRouter = express.Router();
mainRouter.use("/users", userRouter);
mainRouter.use("/tracks", trackRouter);

module.exports = { mainRouter };
