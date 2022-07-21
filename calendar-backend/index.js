const express = require('express');
const dbConnection = require('./database/config');
require('dotenv').config();

const authRouter = require('./routes/auth');

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// Directorio publico
app.use(express.static(`${__dirname}/public/`));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
// TODO: CRUD: Eventos

const { PORT, HOST_DEV } = process.env;

app.listen(PORT, HOST_DEV, () => {
  console.log('Server Running on port: ' + PORT);
});

module.exports = app;
