const movieModel = require("../models/MovieModel");

const createMovieDetails = async (req, res) => {
  try {
    const { title, genre, description, thumbnail, imageURL, videoURL } =
      req.body;
    if (
      !title ||
      !genre ||
      !description ||
      !thumbnail ||
      !imageURL ||
      !videoURL
    )
      return res.status(400).send("All inputs are required");
    if (await movieModel.findOne({ title }))
      return res.status(409).send("Movie title Already Exist.");
    const movieDetails = await movieModel.create({
      title,
      genre,
      description,
      thumbnail,
      imageURL,
      videoURL,
    });
    res.status(201).json(movieDetails);
  } catch (error) {
    console.error(error);
  }
};
const getAllMovieDetails = async (req, res) => {
  try {
    const movieList = await movieModel.find({});
    return res.status(200).json(movieList);
  } catch (error) {
    console.error(error);
  }
};
const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createMovieDetails, getAllMovieDetails, getMovieById };
