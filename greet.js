'use strict'

let greet = module.exports = {};

greet.testGreeting = () =>{
    return true;
}

greet.requiredGreeting = (inputNameString) => {

    if(typeof(inputNameString) !== 'string'){
        return null;
    }

    return `Hello, ${inputNameString}`;
}