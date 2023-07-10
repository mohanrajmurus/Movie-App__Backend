const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose
    .connect(uri)
    .then(() => console.log("mongodb connected sucessfully"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
