const express = require("express");

const getBooksFavorite = require("../controllers/getBooksFavorite");

const getBooksFavoriteRouter = express.Router();

getBooksFavoriteRouter.get("/", getBooksFavorite);

module.exports = getBooksFavoriteRouter;
