const fs = require('fs');

const requestHandler = (req, res) => {
 const url = req.url;
 const method = req.method;

 if(url === "/"){
   res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>')
    res.write('</html>')
    return res.end();
 }

 if(url === "/message" && method === "POST"){
    const body = [];
    req.on('data' , (chunk) => {
        body.push(chunk);
    })


    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split("=")[1];
        fs.writeFileSync('message.txt',message);
    })

    res.statusCode = 302;
    res.setHeader('Location', "/")
    return res.end();
 }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body>Hello From My Node Server</body>')
    res.write('</html>')
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';