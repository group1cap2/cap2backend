const express = require("express");

const getPodcastFavorite = require("../controllers/getPodcastFavorite");

const getPodcastFavoriteRouter = express.Router();

getPodcastFavoriteRouter.get("/", getPodcastFavorite);

module.exports = getPodcastFavoriteRouter;
