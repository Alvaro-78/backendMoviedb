const router = require( 'express' ).Router();
const filmController = require( '../controllers/filmsController' );
const Films = require( '../mongodb/schema/films' )

router.post( '/create', async( req, res ) => {

  try{

    res.json( await filmController.createFilm( new Films( req.body ) ) );

  } catch ( error ) {

    console.log( error )  

  };

  router.get( '/show', async( req, res ) => {

    try {

      const showMovies = await filmController.bringFilms();
      res.json( showMovies )
      
    } catch (error) {

      console.log( error)

    };

  } )

  // router.get('/bring-films', async ( req, res ) => {

  //   try{

  //     const pepe = res.json( await filmController.bringFilms() );
  //       console.log(pepe)
  //   } catch ( error ) {
  
  //     console.log('<----->' ,error )  
  
  //   };

  // });

});

module.exports = router