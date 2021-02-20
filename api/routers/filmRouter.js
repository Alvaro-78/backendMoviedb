const router = require( 'express' ).Router();
const filmController = require( '../controllers/filmsController' );
const Film = require( '../models/film' );


router.get( '/', async( req, res ) => {
  try{
    res.json( await filmController.indexAll() )
  }catch ( error ) {
    return res.sendStatus( 500 ).json({
      message: 'Server Error'
    });
  };
});