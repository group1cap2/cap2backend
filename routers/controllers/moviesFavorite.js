const fs = require("fs");

const moviesFavorite = async (req, res) => {
  const movie = req.body.movie;
  const like = req.body.like;

  fs.readFile("./db/moviesFavorite.json", (err, data) => {
    const moviesFavorite = JSON.parse(data.toString());
    if (like) {
      const newMoviesFavorite = moviesFavorite.filter(
        (elem) => elem.trackId !== movie.trackId
      );
      fs.writeFile(
        "./db/moviesFavorite.json",
        JSON.stringify(newMoviesFavorite),
        () => {
          res.json("deleted");
        }
      );
    } else {
      moviesFavorite.push(movie);
      fs.writeFile(
        "./db/moviesFavorite.json",
        JSON.stringify(moviesFavorite),
        () => {
          res.json("added");
        }
      );
    }
  });
};

module.exports = moviesFavorite;
