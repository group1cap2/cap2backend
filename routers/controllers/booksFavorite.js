const fs = require("fs");

const booksFavorite = (req, res) => {
  const book = req.body.book;
  const like = req.body.like;

  fs.readFile("./db/booksFavorite.json", (err, data) => {
    const booksFavorite = JSON.parse(data.toString());
    if (like) {
      const newBooksFavorite = booksFavorite.filter(
        (elem) => elem.trackId !== book.trackId
      );
      fs.writeFile(
        "./db/booksFavorite.json",
        JSON.stringify(newBooksFavorite),
        () => {
          res.json("deleted");
        }
      );
    } else {
      booksFavorite.push(book);
      fs.writeFile(
        "./db/booksFavorite.json",
        JSON.stringify(booksFavorite),
        () => {
          res.json("added");
        }
      );
    }
  });
};

module.exports = booksFavorite;
