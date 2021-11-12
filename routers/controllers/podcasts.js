const getAllPodcastsWithQuery = async(req, res) => {
  const searchInput = req.query.search;
  if (searchInput) {
   const response = await axios.get(`http://itunes.apple.com/search?term=${searchInput}&media=podcast&limit=50`)
    res.status(200);
    res.json(response.data.results);
  } else {
    const response = await axios.get(`http://itunes.apple.com/search?term=all&media=podcast&limit=50`)
    res.status(200);
    res.json(response.data.results);
  }
};

module.exports = getAllPodcastsWithQuery;
