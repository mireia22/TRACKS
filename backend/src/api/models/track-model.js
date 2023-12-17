const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema(
  {
    points: [
      {
        lat: {
          type: Number,
        },
        lon: {
          type: Number,
        },
        ele: {
          type: Number,
        },
        time: {
          type: String,
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
    photo: { type: String },
  },
  {
    timestamps: true,
    collection: "tracks",
  }
);

const Track = mongoose.model("tracks", trackSchema, "tracks");

module.exports = Track;
