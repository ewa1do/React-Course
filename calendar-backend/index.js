const express = require('express');
require('dotenv').config();

const authRouter = require('./routes/auth');

const app = express();

app.use(express.static(`${__dirname}/public/`));
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
// TODO: CRUD: Eventos

const { PORT, HOST_DEV } = process.env;

app.listen(PORT, HOST_DEV, () => {
  console.log('Server Running on port: ' + PORT);
});

module.exports = app;
