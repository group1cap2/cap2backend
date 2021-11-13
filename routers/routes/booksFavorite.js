const express = require("express");

const booksFavorite = require("../controllers/booksFavorite");

const booksFavoriteRouter = express.Router();

booksFavoriteRouter.put("/", booksFavorite);

module.exports = booksFavoriteRouter;
