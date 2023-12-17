const { deleteFile } = require("../../utils/delefeFile");
const Track = require("../models/track-model");

const getAllTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find();
    return res.status(200).json(tracks);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getTrackById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const track = await Track.findById(id);
    return res.status(200).json(track);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// const getTracksAdmin = async (req, res, next) => {
//   try {
//     const tracks = await Track.find({ verified: true });
//     return res.status(200).json(tracks);
//   } catch (error) {
//     return res.status(400).json({ message: "error in the request" });
//   }
// };

const postTrack = async (req, res, next) => {
  try {
    const { points, totalDistance, elevation, title, photo } = req.body;
    const newTrack = new Track({
      points,
      totalDistance,
      elevation,
      title,
      photo,
    });

    if (req.file) {
      newTrack.photo = req.file.path;
    }

    // if (req.user.role === "admin") {
    //   newTrack.verified = true;
    // } else {
    //   newTrack.verified = false;
    // }

    const savedTrack = await newTrack.save();
    console.log("Track saved", savedTrack);

    return res.status(201).json({ message: "posted", savedTrack });
  } catch (error) {
    console.error("Error in postTrack:", error);
    res.status(500).json(error);
  }
};

const updateTrack = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log("req.file:", req.file);
    console.log("req.body:", req.body);
    const newTrack = new Track(req.body);
    newTrack._id = id;

    if (req.file) {
      newTrack.photo = req.file.path;
      const oldTrack = await Track.findById(id);
      deleteFile(oldTrack.photo);
    }

    const updatedTrack = await Track.findByIdAndUpdate(id, newTrack, {
      new: true,
    });
    return res.status(200).json(updatedTrack);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTrackByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTrack = await Track.findByIdAndDelete(id);

    deleteFile(deletedTrack.photo);
    return res
      .status(200)
      .json({ message: "Track deleted successfully", deletedTrack });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteAllTracks = async (req, res, next) => {
  try {
    const deletedTracks = await Track.deleteMany({});
    console.log(`${deletedTracks.deletedCount} tracks deleted`);
    return res.status(200).json({ message: "All tracks deleted successfully" });
  } catch (error) {
    console.error("Error in deleteAllTracks:", error);
    res.status(500).json(error);
  }
};

module.exports = {
  postTrack,
  getAllTracks,
  updateTrack,
  deleteTrackByID,
  deleteAllTracks,
  getTrackById,
};
