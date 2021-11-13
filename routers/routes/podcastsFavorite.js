const express = require("express");

const podcastsFavorite = require("../controllers/podcastsFavorite");

const podcastsFavoriteRouter = express.Router();

podcastsFavoriteRouter.put("/", podcastsFavorite);

module.exports = podcastsFavoriteRouter;
