const express = require("express");

const getMusicFavorite = require("../controllers/getMusicFavorite");

const getMusicFavoriteRouter = express.Router();

getMusicFavoriteRouter.get("/", getMusicFavorite);

module.exports = getMusicFavoriteRouter;
