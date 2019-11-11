// Define Dependences
const http = require('http');
const app = require('./app');

// Define port
const  port = process.env.PORT || 8888;

// Create a server
const server = http.createServer(app);

// list a port ???
server.listen(port);

/**
 * Note: This app want run command: npm start
 * */
