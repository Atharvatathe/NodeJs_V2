const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);


//To run start script we only use npm start command
//but to run custom script name we use npm run script_name command 
// start is a reserve keyword