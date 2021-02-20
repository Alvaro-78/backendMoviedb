const FilmDB = require("../storedb/filmDB");


class UsersController {


  constructor() {
    this.film = new FilmDB();
  };

  async createFilm() {
    return this.film = new FilmDB();
  };

  async bringFilms() {
    return this.film = this.filmDB.get();
   };

   async updateFilms( id , film ) {
    return this.film.updateById( id, film )
  };

  async removeFilms( id ) {
    return this.film.deleteById( id )
   };

};

let UsersController = new UsersController;
module.exports = UsersController;