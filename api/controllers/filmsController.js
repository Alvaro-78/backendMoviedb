//Requerimos la clase storage con los métodos get set, donde guardaremos las películas
const FilmDB = require("../storedb/filmDB");

class FilmController {

  filmDB;

  constructor() {
    this.film = new FilmDB();
  };

  //Métodos CRUD


  //CREATE Damos de alta una película en la base de datos

  async createFilm() {
    return this.film = new FilmDB();
  };

  //READ Traernos los datos

  async bringFilms() {
   return this.film = this.filmDB.get();
  };

  //UPDATE Modificar datos

  async updateFilms( id , film ) {
    return this.film.updateById( id, film )
  };

  //DELETE Borrar datos

  async removeFilms( id ) {
   return this.film.deleteById( id )
  };

};

let filmController = new FilmController;
module.exports = filmController;