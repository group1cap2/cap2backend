const axios = require("axios");

const getAllMoviesWithQuery = async (req, res) => {
  try {

    const searchInput = req.query.search;
    const limit = req.query.limit;

    if (searchInput) {
      const response = await axios.get(
        `http://itunes.apple.com/search?term=${searchInput}&media=movie&limit=${limit}`
      );

      res.status(200);
      res.json(response.data.results);

    } else {

      const response = await axios.get(
        `http://itunes.apple.com/search?term=all&media=movie&limit=${limit}`
      );

      res.status(200);
      res.json(response?.data.results);
    };

  } catch (error) {
    res.status(200);
    res.json([]);

  };
};

module.exports = getAllMoviesWithQuery;
