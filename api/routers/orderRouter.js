const router = require( 'express' ).Router();
const orderController = require( '../controllers/ordersController' );

router.post( '/', async( req, res ) => {

  try {
    
    const orderFilm = await orderController.createOrderFilm( req.body.user_id, req.body.film_id );
    const status = 'success';
    res.json( { orderFilm, status } );
    
  } catch ( error ) {
    
    return res.status( 404 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-order', async( req, res ) => {

  try {
    
    const showOrders = await orderController.indexAllOrderByCustomer();
    const status = 'success';
    res.json( { showOrders, status } );

  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-all-order', async( req, res ) => {

  try {
    
    const showAllOrders = await orderController.bringAllOrders();
    const status = 'success';
    res.json( { showAllOrders, status } );

  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.put( '/:id', async( req, res ) => {

  try {
    
    const id = req.params.id
    const updateOrders = await orderController.updateOrderByCustomer(  id, req.body );
    const status = 'success';
    res.json( { updateOrders, status } );

  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });
  };

});

router.delete( '/:id/delete', async( req, res ) => {

  try {
    
    const removeOrders = await orderController.removeOrders( req.body );
    const status = 'success';
    res.json( { removeOrders, status } );

  } catch  (error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

module.exports = router;