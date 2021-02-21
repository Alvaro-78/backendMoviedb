//Requerimos la clase storage con los métodos get set, donde guardaremos las películas
const films = require( '../mongodb/schema/films' )
// const FilmDB = require("../storedb/filmDB");

class FilmController {

  constructor() {
    
  };

  //Métodos CRUD

  //CREATE Damos de alta una película en la base de datos

  async createFilm( film ) {

    return films.create( film ) ;

  };

  //READ Traernos los datos

  async bringFilms( film ) {

   return films.find( film );

  };

  //UPDATE Modificar datos

  // async updateFilms( id , film ) {
  //   return this.film.updateById( id, film )
  // };

  // //DELETE Borrar datos

  // async removeFilms( id ) {
  //  return this.film.deleteById( id )
  // };

};

let filmController = new FilmController;
module.exports = filmController;