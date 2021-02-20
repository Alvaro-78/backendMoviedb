
class Film {

  title;
  genre;
  director;
  duration;
  country;
  actors;
  year;

  constructor( film ) {
    this.title = film.title;
    this.genre = film.genre;
    this.director = film.director;
    this.country = film.country;
    this.actors = film.actors;
    this.year = film.year;
  }; 

};


module.exports = Film;