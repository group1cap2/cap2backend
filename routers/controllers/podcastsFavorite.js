const fs = require("fs");

const podcastsFavorite = async (req, res) => {
  try{
    
    const podcast = req.body.podcast;
    const like = req.body.like;

    fs.readFile("./db/podcastsFavorite.json", (err, data) => {
      const podcastsFavorite = JSON.parse(data.toString());
      if (like) {
        const newPodcastsFavorite = podcastsFavorite.filter(
          (elem) => elem.trackId !== podcast.trackId
        );
        fs.writeFile(
          "./db/podcastsFavorite.json",
          JSON.stringify(newPodcastsFavorite),
          () => {
            res.status(200);
            res.json("deleted");
          }
        );
      } else {
        podcastsFavorite.push(podcast);
        fs.writeFile(
          "./db/podcastsFavorite.json",
          JSON.stringify(podcastsFavorite),
          () => {
            res.status(200);
            res.json("added");
          }
        );
      }
    });
  }
  catch(err)
  {
    res.status(200);
    res.json("deleted");
  }
};

module.exports = podcastsFavorite;
