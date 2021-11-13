# :musical_note: iTunes API Search

## Introduction

Welcome to the iTunes API Search.

This is to allows you to type in a search term inside four different media search
music videos, books and movies. Each of these can be navigated
to by the icons on the navbar. Once a media search has been selected, type in a search term and see the results displayed.
To see a preview of the item, click on the label of the media, and the app will show you the details.
Favorites can be added by clicking on the heart icon button which is above each itemof the search result.
To view favorites, click on the favorites from the navbar.

Hosted Link: https://group1-cap2backend.herokuapp.com/

While running locally: http://localhost:5000

### Technologies used:

- Express.js
- iTunes search API
- Postman

## Getting Started

### Installing Dependencies

Run the following command on the main directory:

```
npm i
```

#### Key Dependencies

- [node](https://nodejs.org/en/) Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

### Running the server

After installing the dependencies run to start the development server:

```
npm run dev
```

## API Reference

### Getting Started

Base URL: The backend app is hosted at the default https://group1-cap2backend.herokuapp.com/.

### GET /movies

#### General:

Returns a list of movies objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/movies

### GET /music

#### General:

Returns a list of music objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/music

### GET /podcasts

#### General:

Returns a list of podcasts objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/podcasts

### GET /books

#### General:

Returns a list of books objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/books

### GET /getMoviesFavorite

#### General:

Returns a list of favorite movies objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/getMoviesFavorite

### GET /getMusicFavorite

#### General:

Returns a list of favorite music objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/getMusicFavorite

### GET /getPodcastsFavorite

#### General:

Returns a list of favorite podcasts objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/getPodcastsFavorite

### GET /getBooksFavorite

#### General:

Returns a list of favorite books objects.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/getBooksFavorite

### PUT /setMovieFavorite

#### General:

Add the sent object to favorite or remove it depending request.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/setMovieFavorite

### PUT /setMusicFavorite

#### General:

Add the sent object to favorite or remove it depending request.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/setMusicFavorite

### PUT /setPodcastFavorite

#### General:

Add the sent object to favorite or remove it depending request.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/setPodcastFavorite

### PUT /setBookFavorite

#### General:

Add the sent object to favorite or remove it depending request.

#### Sample:

curl https://group1-cap2backend.herokuapp.com/setBookFavorite