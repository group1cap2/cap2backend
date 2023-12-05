const fs = require("fs");

const getMoviesFavorite = (req, res) => {
  try {

    fs.readFile("./db/moviesFavorite.json", (err, data) => {
      const moviesFavorite = JSON.parse(data.toString());
      res.status(200);
      res.json(moviesFavorite);
    });

  } catch (error) {
    res.status(200);
    res.json([]);
  };
};

module.exports = getMoviesFavorite;
