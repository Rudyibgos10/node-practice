// practicing and recalling to create a simple server
/*
The HTTP module?
—allows data to be transfered through HTTP protocol
—create servers
—handle request from clients
—provide responses to those requests
*/


// it's better to include the node if importing modules to look for node modules directly
import http from 'node:http';

const PORT = 8000;

// accessing http method
// creating the first server
// (req, res => {res.}) is a callback function
const server = http.createServer((req, res) => {
  // res.write('Hello from the server!') could use this
  // res.ed()
  res.end('Hello from the server!')
});
/* The response object— has methods which allow us to:
—specify content-type
—set status codes (200, 400 etc.)
—provide content (html, JSON, images)
*/


// reminder to connect to server first before sending a request — npm start or node server.js
// listen method
server.listen(PORT, () => {console.log(`server running on port: ${PORT}`)});