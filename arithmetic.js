'use strict'

let mathMatters = module.exports = {};

mathMatters.testMath = () =>{
    return 42;
}

mathMatters.testAdd = (a, b) => {
    return a + b;
}

mathMatters.testMultiply = (a, b) => {
    return a * b;
}

mathMatters.testDivide = (a, b) => {

    if(b === 0){
        return null;
    }

    return a / b;
}