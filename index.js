// run `node index.js` in the terminal
const http = require('http');

const port = process.env.PORT || 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  }
});
console.log(`Hello Node.js v${process.versions.node}!`);

server.listen(port, host, () => {
  console.log(`The server is running on port ${port} and host ${host}`);
});
