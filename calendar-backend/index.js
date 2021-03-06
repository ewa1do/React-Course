const express = require('express');
const dbConnection = require('./database/config');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/auth');
const eventRouter = require('./routes/events');

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static(`${__dirname}/public/`));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
app.use('/api/events', eventRouter);

let PORT = process.env.PORT || 4000;

// const { PORT, HOST_DEV } = process.env;

app.listen(PORT, () => {
  console.log('Server Running on port: ' + PORT);
});

module.exports = app;
