const router = require('express').Router();
const filmRouter = require('./routers/filmRouter');
const userRouter = require( './routers/userRouter' );
const orderRouter = require( './routers/orderRouter' );


router.use('/films',filmRouter);

// router.use( '/user', userRouter );

// router.use( '/order', orderRouter );

module.exports = router;