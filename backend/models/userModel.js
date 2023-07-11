const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const userModel = new Schema({
  name: { type: String, require: [true, "Please enter a name"] },
  email: {
    type: String,
    require: [true, "Please enter an email"],
    unique: true,
  },
  password: { type: String, require: [true, "Please enter a password"] },
},{timestamps:true})

const User = mongoose.model("User", userModel)

module.exports = User
