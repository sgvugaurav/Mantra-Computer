const express = require('express');

const PORT = process.env.PORT || 3000;
const hostname = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, hostname, () => {
  console.log(
    `The express app is running on the port ${PORT} and host ${hostname}`
  );
});
