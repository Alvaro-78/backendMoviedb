const router = require( 'express' ).Router();
const UsersController = require( '../controllers/usersController' );

router.post( '/create-user', async( req, res ) => {

  try {
    
    res.json( await UsersController.createUser( req.body ) )

  } catch (error) {
    
  };
});