//Requerimos express 
const express = require( 'express' );
const router = require( './router' );
const app = express();
const port = 3000;
const connection = require('./mongodb/connection')

app.use( express.json() );
app.use( router );

connection.then(() => {
  
  app.listen( port, () => console.log( `Listening at port ${port}` ));
  
}) .catch ( console.log );

