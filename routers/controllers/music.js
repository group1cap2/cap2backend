const axios = require('axios');

const getAllMusicWithQuery = async(req, res) => {
 
  const searchInput = req.query.search;
    if (searchInput) {
     const response = await axios.get(`http://itunes.apple.com/search?term=${searchInput}&media=music&limit=50`)
      res.status(200);
      res.json(response.data.results);
    } else {
      const response = await axios.get(`http://itunes.apple.com/search?term=all&media=music&limit=50`)
      res.status(200);
      res.json(response.data.results);
    }
};

module.exports = getAllMusicWithQuery;
