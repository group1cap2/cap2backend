const express = require("express");

const getPodcastFavorite = require("../controllers/getPodcastsFavorite");

const getPodcastFavoriteRouter = express.Router();

getPodcastFavoriteRouter.get("/", getPodcastFavorite);

module.exports = getPodcastFavoriteRouter;
