/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are movie titles.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
    function getAllMovieTitles(movies, title) {
      if (movies.length === 0) throw "Did Not Find Anything";
      // line 34 checking ova the entire 'lenght" of the list (movies.lenght ) to see if there are NO movies listed
      // if nothing send an error message (throw) to say "nothing is listed" 
    
      allTitles = movies.map((movie)=> movie.title ) 
      // line 38 I reassigned allTitles as a (variable) a small container that will return a NEW array
      // map (make array please), this methods tells us our approach to solving ARRAY problems.
      // map results does not need to be pushed into an empty array. 
      //line 38 translated:  when you look over EACH element on the list (movie)'=>' (this means to do this next action) " find each movie.title is saying find this attibute and return its information. In this case its a string 
      return allTitles
      };
/**
 * checkIfAnyMovieHasRating()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the movies has been given the provided rating. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} [rating="G"] - A movie rating. Defaults to "G".
 * @returns {boolean|Error} Returns `true` if a movie exists in the list with the given rating, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "G");
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "R");
 *  //> false
 */
 function checkIfAnyMovieHasRating(movies,rating="G") {
  if(!movies.length) throw 'Movies array is Empty';/* this line literally translates to, if there are NO(!) movies listed/or found 
  inside the container that was gifted, send out an alert (throw) the messages stating ain't nothing there! "Movies Array is Empty*/
  return movies.some((movie)=> movie.rated===rating // this line literally takes care of "checking' if Any movie has 
  //a rating. Its important to realize that the keyword "entry", or argument, 
  //says the keyword rating WILL default to a "G" rating. So if none other precise rating is given it will look for G rating.  
  /*Line 66 says, look over this list, and give us an outcome or what you find, 
  in this case you put a ("return") in front of what you want to send back after you check.
  "movies.some === tells you the way you're gonna approach the search, then (movie) is the list of things found inside, => this say now DO this! 
  movie.rated (notice how its NOT "movies".rated its MOVIE.rated this is saying look at EACH item on that list one by one) and it will ""===" the "rating" given.  
  Then you give us those results.  Note rating given DEFAULT is rated G" */
  
  )
};

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty, throw an error with a message. If the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|Error|null} The movie object with the matching `imdbID`.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
    function findById(movies, id) {
      if (movies.length === 0) throw  "There are no movies"; // 
      // line 95 checking ova the entire 'length" of the list (movies.lenght ) to see if there are NO movies listed
      // if nothing send an error message (throw) to say "nothing is listed" 
    
     
    
     const Found = movies.find((movie) => {
      // turned line 101 into a variable because if we return here we would not be able to 
      //have line 108
     return movie.imdbID === id})
     // line 104 is literally saying while you are looking through the each item on the list.  
     // Hence line 97, the find method, tells you how to approach and the "movie" represents the individual item
     // to look at. 
     return Found || null
    /* line 108 return (says send this information back) Found || null translates to in javascript {Object|Error|null} The movie object with the matching `imdbID`. 
    In laymen terms, its saying there is NO MOVIE with this given ID!*/
    
    
    };

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty, throw an error with a message. If no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]|Error} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
    function filterByGenre(movies, genre) {


      if (movies.length === 0) throw  "There are no movies";
    
    // line 140 tells us how to approach the list.  How we are going to solve the problem, 
    // line 144 sends infor regarding us to filter through the movie elments. 
       return movies.filter((movie)=>{
        movie.genre.toLowerCase().includes(movie.genre.toLowerCase())
    // line 145 movie.genre on movie.js is a list of genre's, these are case sensitive 
    // filter already creates a new array
    // line 145 is saying gather information of genre, put it all to lower case.  then see 
    // if the genre we are looking for is included on the list hence .includes(genre.toLowerCase())
      })
    
    }
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]|Error} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  if(!movies.length) throw 'Movies array is Empty';
      
   // line 182 say approach solving the problem using a specific method.  
   //line 182 is filtering for a specific movie
   return movies.filter((movie)=>{
   // line 187 is the slice method on a string, it is 20 June 2000 (hence 7 spaces beginning count at 0=2
   // 1=0, J=3, U=4, N=5, E = 6 " "= 7 then we are left with year 2000
   // line 184 is saying if (year less then of equal to given year), its written in javascript as
   //if (movie.released.slice(7) <= year) then give us the 'movies"
   if (movie.released.slice(7) <= year){
    return movies
   }} // this is the closing bracket
    /* line 187 is literally saying find movies released  
    less then (current) or equal to year given which is 2000 */
   )
     
 };

/**
 * checkMinMetascores()
 * -----------------------------
 * Returns either true or false depending whether all movies have a minimum metascore. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} metascore - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinMetascores(movies, 90));
 *  //>  false
 */
 function checkMinMetascores(movies, metascore) {
 

  if(!movies.length) throw 'Movies array is Empty';

// line 
  return movies.every((movie)=> movie.metascore >= metascore);
  
};
/**
 * getRottenTomatoesScoreByMovie()
 * -----------------------------
 * Transform each movie, returning an array of objects where the key is the title of the movie and the value is the score received from Rotten Tomatoes. If there are no movies, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object[]|Error} An array of movie objects where the key is the movie title and the value is the score received from Rotten Tomatoes.
 * 
 * NOTE: You must use both the `.map()` method and the `.find()` method.
 *
 * EXAMPLE:
 *  getRottenTomatoesScoreByMovie(movies);
 *  //> [
      { "Toy Story 4": "97%" },
      { "Inside Out": "98%" },
      { Coco: "97%" },
      { "Incredibles 2": "93%" },
      { Moana: "95%" },
      { "How to Train Your Dragon": "99%" },
      { Paddington: "97%" },
      { "The Lion King": "93%" },
      { Fantasia: "95%" },
      { "James and the Giant Peach": "91%" },
    ];
 */
    function getRottenTomatoesScoreByMovie(movies) {
      if(!movies.length) throw 'Movies array is Empty';
    
      
        //  return movies.map((movie)=> {
        //   return {
        //     [movie.title]: movie.ratings.find(rating => 
        //     ratings.source === 'Rotten Tomatoes')
        //   .value}}
        // )
        movies.map(movie => {return {[movie.title]: movie.ratings.find(rating => rating.source === "Rotten Tomatoes").value}})
    
    
      };
      
// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  checkMinMetascores,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
};
