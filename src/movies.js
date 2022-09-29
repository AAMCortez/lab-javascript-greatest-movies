// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const allMovies = require("./data.js");

function getAllDirectors(allMovies) {
   const directors = allMovies.map((item) => {
      return item.director;
   });
   return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(allMovies) {
   const theBest = allMovies.filter((item) => {
      return (
         item.director === "Steven Spielberg" && item.genre.includes("Drama")
      );
   });
   return theBest.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allMovies) {
   const avg =
      allMovies.reduce((accumulator, currentValue) => {
         return accumulator + currentValue.score;
      }, 0) / allMovies.length;
   return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(allMovies) {
   const filtered = allMovies.filter((drama) => {
      return drama.genre.includes("Drama");
   });
   const reduced =
      filtered.reduce((accumulator, currentValue) => {
         return accumulator + currentValue.score;
      }, 0) / filtered.length;

   return Math.round(reduced * 100) / 100;
}
console.log(dramaMoviesScore(allMovies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(allMovies) {
   const array = allMovies
      .map((item) => {
         return item;
      })
      .sort((a, b) => {
         return a.year - b.year;
      });
   return array;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(allMovies) {
   const array = allMovies
      .map((item) => {
         return item.title;
      })
      .sort((a, b) => {
         return a.localeCompare(b);
      });

   return array.slice(0, 20);
}
console.log(orderAlphabetically(allMovies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(allMovies) {
   const array = allMovies
      .map((item) => {
         return item.title;
      })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(allMovies) {}
