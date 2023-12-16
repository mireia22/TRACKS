const express = require("express");
const {
  getAllTracks,
  getTrackById,
  postTrack,
  deleteAllTracks,
  updateTrack,
  deleteTrackByID,
} = require("../controllers/track-controllers");
const { isAuth } = require("../../middlewares/auth");

const trackRouter = express.Router();

trackRouter.get("/", getAllTracks);
trackRouter.get("/:id", getTrackById);
trackRouter.post("/", postTrack);
trackRouter.put("/:id", updateTrack);
trackRouter.delete("/:id", deleteTrackByID);
trackRouter.delete("/", deleteAllTracks);

module.exports = { trackRouter };
