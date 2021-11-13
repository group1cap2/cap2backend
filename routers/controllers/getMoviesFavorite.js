const fs = require("fs");

const getMoviesFavorite = (req, res) => {
  fs.readFile("./db/moviesFavorite.json", (err, data) => {
    const moviesFavorite = JSON.parse(data.toString());
    res.json(moviesFavorite);
  });
};

module.exports = getMoviesFavorite;
