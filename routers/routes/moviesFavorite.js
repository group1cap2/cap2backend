const express = require("express");

const moviesFavorite = require("../controllers/moviesFavorite");

const moviesFavoriteRouter = express.Router();

moviesFavoriteRouter.put("/", moviesFavorite);

module.exports = moviesFavoriteRouter;
