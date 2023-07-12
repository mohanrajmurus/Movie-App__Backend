const {
  createMovieDetails,
  getAllMovieDetails,
  getMovieById,
  deleteMovieById,
} = require("../controllers/MovieController")
const auth = require('../middleware/auth')
const express = require("express")
const {
  generateImageURL,
  generateVideoURL,
} = require("../controllers/generateCloudURL")

const router = express.Router()

router.post("/addmovie", createMovieDetails)
router.get("/allmovies", getAllMovieDetails)
router.get("/movie/:id",auth, getMovieById)
router.post("/imgurl", generateImageURL)
router.post("/videourl", generateVideoURL)
router.delete("/movie/:id", deleteMovieById)
module.exports = router
