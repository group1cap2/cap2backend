const axios = require('axios');

const getAllBooksWithQuery =async(req, res) => {
  
  const searchInput = req.query.search;
    if (searchInput) {
     const response = await axios.get(`http://itunes.apple.com/search?term=${searchInput}&media=ebook&limit=50`)
      res.status(200);
      res.json(response.data.results);
    } else {
      const response = await axios.get(`http://itunes.apple.com/search?term=all&media=ebook&limit=50`)
      res.status(200);
      res.json(response.data.results);
    }
  };

module.exports = getAllBooksWithQuery;
