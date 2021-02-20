const router = require('express').Router();
const filmRouter = require('./routers/filmRouter');


router.use('/films',filmRouter);


module.exports = router;