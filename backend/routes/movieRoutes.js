const {
  createMovieDetails,
  getAllMovieDetails,
  getMovieById,
  deleteMovieById,
  addMovieRatings,
} = require("../controllers/MovieController")
const auth = require('../middleware/auth')
const express = require("express")
const {
  generateImageURL,
  generateVideoURL,
} = require("../controllers/generateCloudURL")

const router = express.Router()

router.post("/addmovie",auth, createMovieDetails)
router.get("/allmovies", getAllMovieDetails)
router.get("/movie/:id",auth, getMovieById)
router.post("/imgurl", generateImageURL)
router.post("/videourl", generateVideoURL)
router.delete("/movie/:id", deleteMovieById)
router.post('/movie/:id/ratings',auth,addMovieRatings)
module.exports = router
