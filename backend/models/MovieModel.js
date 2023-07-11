const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const movieSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
    title: { type: String, default: null },
    genre: { type: String, default: null },
    description: { type: String, default: null },
    thumbnail: { type: String, default: null },
    imageURL: { type: String, default: null },
    videoURL: { type: String, default: null },
  },
  { timestamps: true }
)

const movieModel = mongoose.model("movieModel", movieSchema)

module.exports = movieModel
