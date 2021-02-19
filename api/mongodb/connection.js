
const logger = (log) => { console.log(new Date, log) };
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


//Uso de las env var o alternativa
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'prácticas';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

//Modelo de la URL
const QUERY_STRING = MONGO_USER ?

  `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}` :
  `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

mongoose.connect(QUERY_STRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  logger('conexión establecida');

})