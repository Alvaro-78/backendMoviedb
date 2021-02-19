//Requerimos express 
const express = require('express');

const app = express();

const port = 3000;

//Importamos las rutas
let filmRouter = require('./routers/filmRouter');

let userRouter = require('./routers/userRouter');

let orderRouter = require('./routers/orderRouter');

//Middlewares
//Usamos el método json de express para traer los datos con formato
app.use(express.json());

//Uso de los endpoints

//Enrutador de películas con el recurso  /film
app.use('/film', filmRouter);

//Enrutador de usuarios con el recurso /user
app.use('/user', userRouter);

//Enrutador de pedidos con el recurso /pedido
app.use('/pedido', orderRouter);

//Levantamos el servidor
app.listen(port, () => console.log(`Listeningat port ${port}`))
