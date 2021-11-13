# iTunes API Search
Welcome to the iTunes API Search.


This is to allows you to type in a search term inside four different media search
	 music videos, audiobooks and movies. Each of these can be navigated 
	to by the icons on the navbar as well as the drop-down which is only available on the 
	home-page.Either can be selected and the app will navigate to the selected media search.
	Once a media search has been selected, type in a search term and see the results displayed.
	To see a preview of the item, click on the label of the media, and the app will redirect
	you to the song/ product listing on Apple's website.
	Favorites can be added by clicking on the "Add a Favorite" button which is below each item
	of the search result.
	To view favorites, browse down to the bottom of the page.
  
With this module you can make any search to iTunes API.

1.	You can search for any iTunes media:
	* movie
	* podcast
	* music
	* ebook
	
2. Search for any attribute available on the iTunes API
	* country
	* media
	* entity
	* attribute
	* limit
	* lang
	* version
	* explicit
3. Get all result in Objects
4. Fast and Safe

## Features
* play/stop control over what's playing.
* query to return a list of available movies/musics/podcasts/ebooks endpoints.

# Technologies used:

* Express.js
* iTunes search API
* Postman



## Instalition

 
 - Clone this reposity using the command -
```
git clone https://github.com/group1cap2/cap2backend.git
```
 - Install required modules using -
```
npm install
```
```
npm run dev
```
## Initialize node project
Initialize node project using init command.
After this, you will see a series of questions and select the default option for now.

```npm init```

## Search API

For searching in the iTunes API you simply include
the search query in your request. The function will
resolve with an object.

Search parameters:

-   _query_ - search string (name, author etc)
-   _limit_ - maximum number or search results.

```
const getAllBooksWithQuery = async(req, res) => {
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
```
## Security

Helmet was installed and used in the server.js file so that the express file could
be secured.
