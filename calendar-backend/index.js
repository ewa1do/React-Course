require('dotenv').config();
const express = require('express');

const authRouter = require('./routes/auth');

const app = express();

app.use(express.static(`${__dirname}/public/`));

// Rutas
// TODO: auth// crear, login, token renew
// app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth', authRouter);

// TODO: CRUD: Eventos

const { PORT } = process.env;

app.listen(PORT, '127.0.0.1', () => {
  console.log('Server Running on port: ' + PORT);
});

module.exports = app;
