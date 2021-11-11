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
app.use(cors());
app.use(helmet());

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

// Start The App
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
