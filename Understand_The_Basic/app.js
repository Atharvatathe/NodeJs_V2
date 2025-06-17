const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.headers, req.url, req.method);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body>Hello From My Node Server</body>')
    res.write('</html>')
    res.end();
})

server.listen(3000);