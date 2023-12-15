const express = require("express");
const {
  getAllTracks,
  getTrackById,
  postTrack,
  deleteAllTracks,
} = require("../controllers/track-controllers");

const trackRouter = express.Router();

trackRouter.get("/", getAllTracks);
trackRouter.get("/:id", getTrackById);
trackRouter.post("/", postTrack);
trackRouter.delete("/", deleteAllTracks);

module.exports = { trackRouter };
