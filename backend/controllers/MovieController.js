const Movie = require("../models/MovieModel")
const Review = require("../models/MovieReviewModel")
const Rating = require("../models/MovieRatingModel")
const asyncHandler = require("express-async-handler")
const createMovieDetails = asyncHandler(async (req, res) => {
  const {
    title,
    genre,
    description,
    thumbnail,
    imageURL,
    videoURL,
    castandcrews,
  } = req.body
  if (await Movie.findOne({ title }))
    return res.status(409).send("Movie title Already Exist.")
  const movieDetails = await Movie.create({
    title,
    genre,
    description,
    thumbnail,
    imageURL,
    videoURL,
    castandcrews,
    user: req.user._id,
  })
  res.status(201).json(movieDetails)
})

const getAllMovieDetails = asyncHandler(async (req, res) => {
  const movieList = await Movie.find({})
  return res.status(200).json(movieList)
})
const getMovieById = asyncHandler(async (req, res) => {
  const { id } = req.params
  const movie = await Movie.findById(id)
  return res.status(200).json(movie)
})
const deleteMovieById = asyncHandler(async (req, res) => {
  const { id } = req.params
  const del = await Movie.findByIdAndDelete(id)
  res.status(200).json(del)
})
const addMovieRatings = asyncHandler(async (req, res) => {
  const movie_id = req.params.id
  console.log(movie_id);
  const user_id = req.user._id
  const rate = await Rating.create({
    movie_id,
    user: user_id,
    ratings: req.body.rate,
  })
  if (rate) return res.status(201).send("Posted Sucessfully")
})

const addReviews = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { comments } = req.body
  const review = await Review.create({
    movie_id: id,
    user: req.user._id,
    comments,
  })
  if (review) return res.status(201).send("Posted Sucessfully")
})

const getMovieRatings = asyncHandler(async (req,res) => {
  const {id} = req.params
  const ratings = await Rating.find({movie_id:id})
  res.status(200).json(ratings)
})
const getMovieReviews = asyncHandler(async (req,res) => {
  const {id} = req.params
  const reviews = await Review.find({movie_id:id})
  res.status(200).json(reviews)
})
module.exports = {
  createMovieDetails,
  getAllMovieDetails,
  getMovieById,
  deleteMovieById,
  addMovieRatings,
  addReviews,
  getMovieRatings,
  getMovieReviews
}
