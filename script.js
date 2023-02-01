const numerOffFilms = +prompt("Сколько фильмов посмотрели?");

const personalMovieDB = {
   count: numerOffFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}
const a = prompt("Один из последних просмотренных фильмов?");
const b = prompt("На сколько оцените его?");
const c = prompt("Один из последних просмотренных фильмов?");
const d = prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d
 console.log(personalMovieDB);