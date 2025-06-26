const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);


//To run start script we only use npm start command
//but to run custom script name we use npm run script_name command 
// start is a reserve keyword