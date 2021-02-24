const router = require( 'express' ).Router();
const usersController = require( '../controllers/usersController' );


router.post( '/create-users', async( req, res ) => {

  try {
    
    const createUser = await usersController.createUsers( req.body );
    res.json( createUser );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };
  
});

router.post('/login',async ( req,res ) => {

  try {

      const { email,password } = req.body;
      const jwt = await usersController.login( email,password );
      res.json( { jwt } )

  } catch ( error ) {

      return res.status( 401 ).json({

          message: error.message
      });
  };
});

router.get( '/show-users', async( req, res ) => {

  try {
    
    const showUsers = await usersController.bringUsers();
    res.json( showUsers );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-all-users', async( req, res ) => {

  try {
    
    const showAllUsers = await usersController.bringAllUsers();
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
    const updateUsers = await usersController.updateUsers( id, req.body );
    const status = 'success';
    res.json( { updateUsers, status } );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });
    
  };

});

router.delete( '/:id', async( req, res ) => {

  try {
    
    const id = req.params.id;
    const deleteUsers = await usersController.removeUsers( id );
    const status = 'success';
    res.json( { deleteUsers, status } );

  } catch (error) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});


module.exports = router;