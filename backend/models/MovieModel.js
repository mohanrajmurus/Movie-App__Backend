const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const movieSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
    title: {
      type: String,
      default: null,
      require: [true, "A movie model has title"],
      unique: true,
      trim: true,
    },
    castandcrews: {
      director: { type: String, default: null },
      music_dir: { type: String, default: null },
      producer: { type: String, default: null },
      cast: { type: Array, default: null },
    },
    genre: {
      type: String,
      default: null,
      require: [true, "A movie model has genre"],
      trim: true,
    },
    description: {
      type: String,
      default: null,
      require: [true, "A movie model has description"],
      trim: true,
    },
    thumbnail: {
      type: String,
      default: null,
      require: [true, "A movie model has thumbnail"],
    },
    imageURL: {
      type: String,
      default: null,
      require: [true, "A movie model has image URL"],
    },
    videoURL: {
      type: String,
      default: null,
      require: [true, "A movie model has video URL"],
    },
    reviews: [
      {
        user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
        date: { type: Date, default: new Date() },
        comments: { 
          title:{type: String, default: null,require:true},
          body:{type: String, default: null}
         },
        ratings: { type: Number, default: 5 },
      },
    ],
  },
  { timestamps: true }
)

const movieModel = mongoose.model("movieModel", movieSchema)

module.exports = movieModel
