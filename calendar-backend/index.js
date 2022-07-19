const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    ok: true,
  });
});

const PORT = (process.env.PORT = 4000);
const HOST_DEV = (process.env.HOST_DEV = '127.0.0.1');

app.listen(PORT, HOST_DEV, () => {
  console.log('Server Running on port: ' + PORT);
});
