'use strict'

//MODULE IMPORTS    
const greetImport = require('../lab01/greet');
const mathImport = require('../lab01/arithmetic');
const http = require('http');

//MODULE METHODS STORED IN VARIABLES
const greetingTest = greetImport.requiredGreeting('Jesse');
const mathTest = mathImport.testAdd(1, 2);


//SERVER FOR TEST RUN  
const requestHandler = (req, res) => {
    res.setHeadder('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(greetingTest);
    res.write(mathTest);
    res.end();
}


//SERVER RUN
const app = http.createServer(requestHandler);
app.listen(process.env.PORT, () => console.log('server is listening'));


//MODULE METHOD CONSOLE LOGS    
console.log(greetingTest);
console.log(mathTest);