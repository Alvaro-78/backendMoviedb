const router = require( 'express' ).Router();
const orderController = require( '../controllers/ordersController' );

router.post( '/:id/create-order', async( req, res ) => {

  try {
    
    const orderFilm = await orderController.createOrderFilm( req.body );
    res.json( orderFilm );

  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-order', async( req, res ) => {

  try {
    
    const showOrders = await orderController.indexAllOrderByCustomer();
    res.json( showOrders );

  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

router.get( '/show-all-order', async( req, res ) => {

  try {
    
    const showAllOrders = await orderController.bringAllOrders();
    res.json( showAllOrders );

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
    res.json( updateOrders );

  } catch ( error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });
  };

});

router.delete( '/:id/delete', async( req, res ) => {

  try {
    
    const removeOrders = await orderController.removeOrders( req.body );
    res.json( removeOrders );

  } catch  (error ) {
    
    return res.status( 500 ).json({

      message: error.message
      
    });

  };

});

module.exports = router;