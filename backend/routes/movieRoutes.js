const {createMovieDetails,getAllMovieDetails, getMovieById} = require('../controllers/MovieController')
const express= require('express');

const router = express.Router();

router.post('/addmovie',createMovieDetails);
router.get('/allmovies',getAllMovieDetails)
router.get('/movie/:id',getMovieById)

module.exports = router;