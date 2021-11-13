const express = require("express");

const musicFavorite = require("../controllers/musicFavorite");

const musicFavoriteRouter = express.Router();

musicFavoriteRouter.put("/", musicFavorite);

module.exports = musicFavoriteRouter;
