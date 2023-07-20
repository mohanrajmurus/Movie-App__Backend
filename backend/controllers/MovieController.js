const movieModel = require("../models/MovieModel")
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
  if (await movieModel.findOne({ title }))
    return res.status(409).send("Movie title Already Exist.")
  const movieDetails = await movieModel.create({
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
  const movieList = await movieModel.find({})
  return res.status(200).json(movieList)
})
const getMovieById = asyncHandler(async (req, res) => {
  const { id } = req.params
  const movie = await movieModel.findById(id)
  return res.status(200).json(movie)
})
const deleteMovieById = asyncHandler(async (req, res) => {
  const { id } = req.params
  const del = await movieModel.findByIdAndDelete(id)
  res.status(200).json(del)
})
const addMovieRatings = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { userrating } = req.body
  const movie = await movieModel.findById(id)
  movie.ratings.push({ userrating, user: req.user._id })
  await movie.save()
  res.status(201).send("Rating Posted sucessfully")
})

const addReviews = asyncHandler(async (req, res) => {
  const {id} = req.params
  const {comments} = req.body
  const movie = await movieModel.findById(id)
  movie.reviews.push({
    user:req.user._id,
    postedAt: new Date(),
    comments
  })
  await movie.save()
  res.status(201).send('posted sucessfully')
})
module.exports = {
  createMovieDetails,
  getAllMovieDetails,
  getMovieById,
  deleteMovieById,
  addMovieRatings,
  addReviews,
}
