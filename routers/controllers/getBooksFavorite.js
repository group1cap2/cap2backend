const fs = require("fs");

const getBooksFavorite = (req, res) => {
  try 
  {
    fs.readFile("./db/booksFavorite.json", (err, data) => {
      const booksFavorite = JSON.parse(data.toString());
      res.status(200);
      res.json(booksFavorite);
    });
  } catch (error) {
    res.status(200);
    res.json([]);
  };
};

module.exports = getBooksFavorite;
