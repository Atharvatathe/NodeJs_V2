const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);


//To run start script we only use npm start command
//but to run custom script name we use npm run script_name command 
// start is a reserve keyword