const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// CONSTANTS
const PORT = process.env.PORT;

// Initiate The App
const app = express();

// App Level Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// Routers //

// Movies
const moviesRouter = require("./routers/routes/movies");
app.use("/movies", moviesRouter);

// Music
const musicRouter = require("./routers/routes/music");
app.use("/music", musicRouter);

// Podcast
const podcastRouter = require("./routers/routes/podcasts");
app.use("/podcasts", podcastRouter);

// Books
const booksRouter = require("./routers/routes/books");
app.use("/books", booksRouter);

// Set Favorite //

// Movies
const moviesFavoriteRouter = require("./routers/routes/moviesFavorite");
app.use("/setMovieFavorite", moviesFavoriteRouter);

// Music
const musicFavoriteRouter = require("./routers/routes/musicFavorite");
app.use("/setMusicFavorite", musicFavoriteRouter);

// Podcast
const podcastsFavoriteRouter = require("./routers/routes/podcastsFavorite");
app.use("/setPodcastFavorite", podcastsFavoriteRouter);

// Books
const booksFavoriteRouter = require("./routers/routes/booksFavorite");
app.use("/setBookFavorite", booksFavoriteRouter);

// Get Favorite //

// Movies
const getMoviesFavoriteRouter = require("./routers/routes/getMoviesFavorite");
app.use("/getMoviesFavorite", getMoviesFavoriteRouter);

// Music
const getMusicFavoriteRouter = require("./routers/routes/getMusicFavorite");
app.use("/getMusicFavorite", getMusicFavoriteRouter);

// Podcast
const getPodcastsFavoriteRouter = require("./routers/routes/getPodcastsFavorite");
app.use("/getPodcastsFavorite", getPodcastsFavoriteRouter);

// Books
const getBooksFavoriteRouter = require("./routers/routes/getBooksFavorite");
app.use("/getBooksFavorite", getBooksFavoriteRouter);

// Start The App
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
