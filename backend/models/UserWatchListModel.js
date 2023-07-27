const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const { schema } = require("./userModel")

const watchListModel = new Schema({
    user:{type: Schema.Types.ObjectId,require:true,ref:'User'},
    watchlist:[{type:Schema.Types.ObjectId,ref:'Movie'}],
    createdAt:{type:Date, default: new Date()}
})


const WatchList = mongoose.model('WatchList',watchListModel)

module.exports = WatchList