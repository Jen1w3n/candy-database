// https://www.w3schools.com/nodejs/default.asp
const http = require('http');
const app = require('./app');
const fs = require('fs');

const port = 3002
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "*");
    next();
  }
  
  app.use(allowCrossDomain);

//https://www.w3schools.com/nodejs/met_http_createserver.asp
const server = http.createServer(
    {
        key: fs.readFileSync('./keys/privatekey.pem'),
        cert: fs.readFileSync('./keys/certificate.pem')
    },app);

server.listen(port)

