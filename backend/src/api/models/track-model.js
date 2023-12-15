const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  points: [
    {
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
      ele: {
        type: Number,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
  totalDistance: {
    type: Number,
  },
  elevation: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    avg: {
      type: Number,
    },
  },
  personRecorder: {
    type: String,
  },
});

const Track = mongoose.model("track", trackSchema, "track");

module.exports = Track;
