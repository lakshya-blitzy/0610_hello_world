const _ = require('lodash');

/** Handles each incoming HTTP request by responding with the plain-text body "Hello, World!". */
require('http').createServer((req, res) => {
  res.end('Hello, World!\n');
}).listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));
