const fs = require("fs");

const getMusicFavorite = (req, res) => {

  try {

    fs.readFile("./db/musicFavorite.json", (err, data) => {

      const musicFavorite = JSON.parse(data.toString());
      res.status(200);
      res.json(musicFavorite);

    });
  } catch (error) {
    res.status(200);
    res.json([]);
  };

};

module.exports = getMusicFavorite;
