const express = require('express');
require('dotenv').config();

const authRouter = require('./routes/auth');

const app = express();

app.use(express.static(`${__dirname}/public/`));
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
// TODO: CRUD: Eventos

const { PORT } = process.env;

app.listen(PORT, '127.0.0.1', () => {
  console.log('Server Running on port: ' + PORT);
});

module.exports = app;
