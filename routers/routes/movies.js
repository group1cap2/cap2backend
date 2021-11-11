const express = require("express");

const getAllMoviesWithQuery = require("../controllers/movies");

const moviesRouter = express.Router();

moviesRouter.get("/", getAllMoviesWithQuery);

module.exports = moviesRouter;
