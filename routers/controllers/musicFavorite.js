const fs = require("fs");

const musicFavorite = async (req, res) => {
  const song = req.body.song;
  const like = req.body.like;

  fs.readFile("./db/musicFavorite.json", (err, data) => {
    const musicFavorite = JSON.parse(data.toString());
    if (like) {
      const newMusicFavorite = musicFavorite.filter(
        (elem) => elem.trackId !== song.trackId
      );
      fs.writeFile(
        "./db/musicFavorite.json",
        JSON.stringify(newMusicFavorite),
        () => {
          res.json("deleted");
        }
      );
    } else {
      musicFavorite.push(song);
      fs.writeFile(
        "./db/musicFavorite.json",
        JSON.stringify(musicFavorite),
        () => {
          res.json("added");
        }
      );
    }
  });
};

module.exports = musicFavorite;
