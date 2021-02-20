const router = require('express').Router();
const filmRouter = require('./api/routers/filmRouter');


router.use('/cars',filmRouter);


module.exports = router;