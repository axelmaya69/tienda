import express from 'express';

import ClienteRouter from './routes/ClienteRouter.js'
import EnvaseRouter from './routes/EnvaseRouter.js'
import ProductoRouter from './routes/ProductoRouter.js'
import RecargaRouter from './routes/RecargaRouter.js'
import RecargaClienteRouter from './routes/RecargaClienteRouter.js';
import ProductoClienteRouter from './routes/ProductoClienteRouter.js';
import EnvaseClienteRouter from './routes/EnvaseClienteRouter.js';

const app = express();

//middlewares
app.use(express.json())

//

app.use(ClienteRouter);
app.use(EnvaseRouter);
app.use(ProductoRouter);
app.use(RecargaRouter);
app.use(EnvaseClienteRouter);
app.use(ProductoClienteRouter);
app.use(RecargaClienteRouter);

export default app;