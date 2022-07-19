require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public/`));

// app.get('/', (req, res) => {
//   res.status(200).json({
//     ok: true,
//   });
// });

const { PORT } = process.env;

app.listen(PORT, '127.0.0.1', () => {
  console.log('Server Running on port: ' + PORT);
});
