const fs = require("fs");

const getMusicFavorite = (req, res) => {
  fs.readFile("./db/musicFavorite.json", (err, data) => {
    const musicFavorite = JSON.parse(data.toString());
    res.json(musicFavorite);
  });
};

module.exports = getMusicFavorite;
