const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema(
  {
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
    title: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "tracks",
  }
);

const Track = mongoose.model("tracks", trackSchema, "tracks");

module.exports = Track;
