const fs = require("fs");

const getPodcastFavorite = (req, res) => {
  try {
    fs.readFile("./db/podcastsFavorite.json", (err, data) => {
      const podcastsFavorite = JSON.parse(data.toString());
      res.status(200);
      res.json(podcastsFavorite);
    });

  } catch (error) {
    res.status(200);
    res.json([]);
  };
};

module.exports = getPodcastFavorite;
