//Requerimos la clase storage con los métodos get y set donde guardaremos las películas
const filmDatabase = require("../storage/filmDb");
//Requerimos la clase Film para traernos las propiedades que tiene film
const filmModel = require('../models/film');

//Instanciamos la clase filmDatabase y la guardamos en database
let database = new filmDatabase();

class FilmController {


  constructor() {
    this.film = new FilmModel
  };

  //Métodos CRUD


  //CREATE Damos de alta una película en la base de datos

  async createFilm( req, res ) {

    let body = req.body;

    try {
     
      let saveFilm = await database.set( film );
            
      if( saveFilm ){
          res.send( "Película guardada!!");
      };
      
    }catch ( error ) {
      console.log( error.message )
    };

  };

  //READ Traernos los datos

  async bringFilms( req,res ) {
    try {
        let getting = await database.get();

        if( getting ) {
            res.send( getting );
        }
    }catch (error) {
        console.log(error);
    };

  };

  //UPDATE Modificar datos

  async updateFilms( req, res ) {
    try {
        let update = await database.get();

        if( update ) {
            res.send( update );
        }
      }catch (error) {
        console.log(error);
    };
  };

  //DELETE Borrar datos

  async removeFilms( req, res ) {
    try {
        let remove = await database.get();

        if( remove ) {
            res.send( remove );
        }
      }catch (error) {
        console.log(error);
    };
  };

};

let filmController = new FilmController;
module.exports = filmController