const express = require("express");

const getMoviesFavorite = require("../controllers/getMoviesFavorite");

const getMoviesFavoriteRouter = express.Router();

getMoviesFavoriteRouter.get("/", getMoviesFavorite);

module.exports = getMoviesFavoriteRouter;
