const express = require("express");

const getAllMusicWithQuery = require("../controllers/music");

const musicRouter = express.Router();

musicRouter.get("/", getAllMusicWithQuery);

module.exports = musicRouter;
