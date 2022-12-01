/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
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
function getAllMovieTitles(movies) {
  // Error catch if movies array is empty
  if (movies.length == 0) throw 'ERROR: No movies.';
  // Use of map to iterate through provided movies array and return each title
  const movTitles = movies.map((movie) => {
    return movie.title;
  })
  return movTitles;
}

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
function checkIfAnyMovieHasRating(movies, rating = 'G') {
  // Error catch if movies array is empty
  if (movies.length == 0) throw 'ERROR: No movies.';
  // Using some, we check to see if the rating param is present in the 'rated' value of each movie 
  return movies.some(movie => movie.rated === rating)
  // I challenged myself to do these same functions with our old learning
  // for (let movie of movies) {
  //   if (movie.rated === rating) {
  //     return true;
  //   } else {
  //     return false
  //   }
  // }
}

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
  // Error catch if movies array is empty
  if (movies.length == 0) throw 'ERROR: No movies.';
  //  Searching through movies array to see find the given id param within the movie.imbdID property
  //  Normally find would return undefined if the given thing isnt found(when it finds it, its "truthy"), but by specifying a different "falsey" value, I am telling this functiuon to return 'null' instead of the normal 'undefined'
  return movies.find(movie => {
    return movie.imdbID === id;
  }) || null;

  // for (let movie of movies) {
  //   if (movie.imdbID === id) {
  //     return movie;
  //   }
  // }
  // return null;
}

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
  // Error catch if movies array is empty
  if (movies.length == 0) throw 'ERROR: No movies.';
  //  Using filter, we look through each movie genre string to see if it includes the given genre param
  //  In order to make this case-insensitive, I used toLowerCase to make all string uniformly small
  let genreMatch = movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()))
  return genreMatch;

  // let genreMatch = [];
  // for (movie of movies) {
  //   if (movie.genre.includes(genre)) {
  //     genreMatch.push(movie);
  //   }
  // }
  // return genreMatch;
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
  // Error catch if movies array is empty
  if (movies.length == 0) throw 'ERROR: No movies.';
  //  Here I am looking at each movies released string, slicing it 4 from the end(which gives us just the year).  Then, bc it was a string, I am turning that into a number, and comparing that with the given year param.  I tried doing this in a longer and more complicated way using split and join on the released string, but it kept failing repeatedly.  Once I took a step back I realized I could do all of that using slice and Number chained together instead.
  return movies.filter(movie => Number(movie.released.slice(-4)) <= year);
}

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
  // Error catch if movies array is empty
  if (movies.length == 0) throw 'ERROR: No movies.';
  // Using every, we are checking to see if each movies metascore, is greater than the given metascore param.
  return movies.every(movie => movie.metascore >= metascore);
}

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
  // Error catch if movies array is empty
  if (movies.length == 0) throw 'ERROR: No movies.';
  // Here we are iterating through each element of the movies array using map.
  // We are then creating a new bucket and using find to look through EACH movies ratings array and finding the one whose source is Rotten Tomatoes.
  // Finally, we are returning the movie title and the rating of our found Rotten Tomatoes rating to create a new object.ƒ
  return movies.map(movie => {
    let rottenRating = movie.ratings.find((rating) => rating.source === 'Rotten Tomatoes');
    return { [movie.title]: rottenRating.value };
  })
}

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
