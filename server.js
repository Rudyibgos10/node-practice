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
// ((req, res) => {res.}) is a callback function

/*
const server = http.createServer((req, res) => { —commented this for next lesson
  // res.write('Hello from the server!') could use this
  // res.ed()
  res.end('Hello from the server!')
});
*/

/* The response object— has methods which allow us to:
—specify content-type
—set status codes (200, 400 etc.)
—provide content (html, JSON, images)
*/


// reminder to connect to server first before sending a request — npm start or node server.js
// listen method

//server.listen(PORT, () => {console.log(`server running on port: ${PORT}`)});—commented this for next lesson



// ---------------------------------------------------------------------------------->
// Lesson continuation 1/13/26

/*
The request Object—gives us access to the incoming object
—the URL the client used
—the headers
—any data sent
—the method (GET, POST, DELETE, ETC.)
*/


const server = http.createServer((req, res) => {

  // added a condition for checking the url equals to api and method equals to 'GET'
  if (req.url === '/api' && req.method === 'GET') {
    res.end('Hello from the server!')
  }
  // did try to run this on the server, got actually connected to the server but, I dont know yet how use third party apps or website to the route or api—will be practicing postman application soon so that I test the APIs i'm practicing.
});

server.listen(PORT, () => {console.log(`server running on port: ${PORT}`)});