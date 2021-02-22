const router = require( 'express' ).Router();
const filmController = require( '../controllers/filmsController' );
const Films = require( '../mongodb/schema/films' )

router.post( '/create', async( req, res ) => {

  try{

    res.json( await filmController.createFilm( new Films( req.body ) ) );

  } catch ( error ) {

    console.log( error )  

  };

});

router.get( '/show', async( req, res ) => {

  try {

    const showMovies = await filmController.bringFilms();
    res.json( showMovies )
    
  } catch (error) {

    console.log( error)

  };

});

router.get( '/show-all', async( req, res ) => {

  try{

    const showAllMovies = await filmController.bringAllFilms();
    res.json( showAllMovies );

  } catch ( error ) {

    console.log( error )  

  };

});

router.put( '/:id/update', async( req, res ) => {

  try {

    const updateMovie = await filmController.updateFilms( _id, body, { new: true} );
    res.json( updateMovie )
    
  } catch (error) {
    
    console.log( error )  

  };

});

router.delete( '/:id/delete', async( req, res ) => {

  try {

    // const id = req.params.id
    const deleteMovie = await filmController.removeFilms();
    res.json( deleteMovie );
    
  } catch (error) {
    
    console.log( error );

  };

});


module.exports = router