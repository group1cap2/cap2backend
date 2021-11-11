const express = require("express");

const getAllPodcastsWithQuery = require("../controllers/podcasts");

const podcastsRouter = express.Router();

podcastsRouter.get("/", getAllPodcastsWithQuery);

module.exports = podcastsRouter;
