const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.headers, req.url, req.method);
    // process.exit();
})

server.listen(3000);