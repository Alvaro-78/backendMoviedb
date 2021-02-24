const router = require( 'express' ).Router();
const filmController = require( '../controllers/filmsController' );

router.post( '/create-films', async( req, res ) => {

  try{

    const createMovies = await filmController.createFilm( req.body );
    res.json( createMovies );

  } catch ( error ) {

    return res.status( 500 ).json({

      message: error.message

    });

  };

});


router.post( '/search', async( req, res ) => {

  try {

    const { title } = req.body
    const showMovies = await filmController.searchByTitle( title );
    res.json( showMovies );
    
  } catch ( error ) {

    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-all-films', async( req, res ) => {

  try{

    const showAllMovies = await filmController.bringAllFilms();
    res.json( showAllMovies );

  } catch ( error ) {

    return res.status( 500 ).json({

      message: error.message
      
    });  

  };

});

router.put( '/:id', async( req, res ) => {

  try {

    const id = req.params.id
    const updateMovie = await filmController.updateFilms( id, req.body );
    res.json( updateMovie )
    
  } catch  (error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });  

  };

});

router.delete( '/:id/delete', async( req, res ) => {

  try {

    const deleteMovie = await filmController.removeFilms( req.body );
    res.json( deleteMovie );
    
  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

module.exports = router;