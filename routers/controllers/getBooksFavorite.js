const fs = require("fs");

const getBooksFavorite = (req, res) => {
  fs.readFile("./db/booksFavorite.json", (err, data) => {
    const booksFavorite = JSON.parse(data.toString());
    res.json(booksFavorite);
  });
};

module.exports = getBooksFavorite;
