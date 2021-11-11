const express = require("express");

const getAllBooksWithQuery = require("../controllers/books");

const booksRouter = express.Router();

booksRouter.get("/", getAllBooksWithQuery);

module.exports = booksRouter;
