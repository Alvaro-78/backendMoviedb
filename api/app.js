//Requerimos express 
const express = require( 'express' );
const router = require( './router' );
const app = express();
const port = 3000;
const connection = require('./mongodb/connection');

// const userRouter = require( './routers/userRouter' );
// const filmRouter = require( './routers/filmRouter' );

app.use( express.json() );
app.use( router );

// app.use( 'film', filmRouter );
// app.use( 'user', userRouter );

connection.then(() => {
  
  app.listen( port, () => console.log( `Listening at port ${port}` ));
  
}) .catch ( console.log );

