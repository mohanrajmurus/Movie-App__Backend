const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const reviewModel = new Schema({
  movie_id: { type: Schema.Types.ObjectId, require: true, ref: "movieModel" },
  user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  postedAt: { type: Date, default: new Date() },
  comments: {
    title: { type: String, default: null, require: true },
    body: { type: String, default: null },
  },
})

const Review = mongoose.model("Review", reviewModel)
module.exports = Review
