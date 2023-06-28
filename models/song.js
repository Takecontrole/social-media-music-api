const mongoose = require("mongoose");

const SongSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      
    },
    name: {
      type: String,
      required: true,
    },

    imageURL: {
      type: String,
      required: true,
    },
    songUrl: {
      type: String,
      required: true,
    },
    album: {
      type: String,
    },
    artist: {
      type: String,
      
    },
    language: {
      type: String,
      
    },
    category: {
      type: String,
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("song", SongSchema);
