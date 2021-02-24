const router = require('express').Router();
const filmRouter = require('./routers/filmRouter');
const userRouter = require( './routers/userRouter' );
const orderRouter = require( './routers/orderRouter' );


router.use('/films',filmRouter);

router.use( '/users', userRouter );

router.use( '/orders', orderRouter );

module.exports = router;