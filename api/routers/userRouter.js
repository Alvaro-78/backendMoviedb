const router = require( 'express' ).Router();
const UsersController = require( '../controllers/usersController' );


router.post( '/create-users', async( req, res ) => {

  try {
    
    const createUser = await UsersController.createUsers( req.body );
    res.json( createUser );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };
  
});

router.get( '/show-users', async( req, res ) => {

  try {
    
    const showUsers = await UsersController.bringUsers();
    res.json( showUsers );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-all-users', async( req, res ) => {

  try {
    
    const showAllUsers = await UsersController.bringAllUsers();
    res.json( showAllUsers );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.put( '/:id', async( req, res ) => {

  try {
    
    const id = req.params.id
    const updateUsers = await UsersController.updateUsers( id, req.body );
    res.json( updateUsers );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });
    
  };

});

router.delete( '/:id', async( req, res ) => {

  try {
    
    const id = req.params.id;
    const deleteUsers = await UsersController.removeUsers( id );
    res.json( deleteUsers );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});


module.exports = router;