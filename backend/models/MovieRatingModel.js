const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const ratingModel = new Schema({
  movie_id: { type: Schema.Types.ObjectId, require: true, ref: "movieModel" },
  user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  ratings:{type:Number,require:true},
  createdAt:{type:Date, default:new Date()}
})

const Rating = mongoose.model('Rating',ratingModel);
module.exports = Rating
