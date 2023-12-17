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
const upload = require("../../middlewares/file");

const trackRouter = express.Router();

trackRouter.get("/", getAllTracks);
trackRouter.get("/:id", getTrackById);
trackRouter.post("/", upload.single("photo"), postTrack);
trackRouter.put("/:id", upload.single("photo"), updateTrack);
trackRouter.delete("/:id", deleteTrackByID);
trackRouter.delete("/", deleteAllTracks);

module.exports = { trackRouter };
