const fs = require("fs");

const booksFavorite = (req, res) => {
  try
  {
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
            res.status(200);
            res.json("deleted");
          }
        );
      } else {
        booksFavorite.push(book);
        fs.writeFile(
          "./db/booksFavorite.json",
          JSON.stringify(booksFavorite),
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
  };
};

module.exports = booksFavorite;
