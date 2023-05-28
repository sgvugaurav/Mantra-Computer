const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const hostname = '127.0.0.1';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, hostname, () => {
  console.log(
    `The express app is running on the port ${PORT} and host ${hostname}`
  );
});
