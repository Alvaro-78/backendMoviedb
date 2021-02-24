const router = require( 'express' ).Router();
const filmController = require( '../controllers/filmsController' );

router.post( '/create-films', async( req, res ) => {

  try{

    const createFilm = await filmController.createFilm( req.body );
    const status = 'success';
    res.json( { createFilm, status } );

  } catch ( error ) {

    return res.status( 404 ).json({

      message: error.message

    });

  };

});


router.post( '/search', async( req, res ) => {

  try {

    const { title } = req.body
    const showMovies = await filmController.searchByTitle( title );
    const status = 'success';
    res.json( { showMovies, status } );
    
  } catch ( error ) {

    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-all-films', async( req, res ) => {

  try{

    const showAllMovies = await filmController.bringAllFilms();
    const status = 'success';
    res.json( { showAllMovies, status } );

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
    const status = 'success';
    res.json( { updateMovie, status } )
    
  } catch  (error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });  

  };

});

router.delete( '/:id/delete', async( req, res ) => {

  try {

    const deleteMovie = await filmController.removeFilms( req.body );
    const status = 'success';
    res.json( { deleteMovie, status } );
    
  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

module.exports = router;