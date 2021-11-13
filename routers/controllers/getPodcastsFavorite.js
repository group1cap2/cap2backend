const fs = require("fs");

const getPodcastFavorite = (req, res) => {
  fs.readFile("./db/podcastsFavorite.json", (err, data) => {
    const podcastsFavorite = JSON.parse(data.toString());
    res.json(podcastsFavorite);
  });
};

module.exports = getPodcastFavorite;
