'use strict'

const greetingModule = require('../greet');
const mathModule = require('../arithmetic');


//GREETING MODULE TESTS
describe('#greet.js', () => {

    test('testing the test', () => {
        expect(greetingModule.testGreeting()).toBeTruthy();
    });

    test('tests null value for non string entry', () => {
        expect(greetingModule.requiredGreeting(42)).toBeNull();
    });

    test('tests greeting string truthy', () => {
        expect(greetingModule.requiredGreeting('Jesse')).toBeTruthy();
    });

    test('tests greeting input string value', () => {
        expect(greetingModule.requiredGreeting('Jesse')).toBe('Hello, Jesse');
    })
})

//MATH MODULE TESTS

describe('#arithmetic.js', () => {

    test('testing the universal answer', () => {
        expect(mathModule.testMath()).toBe(42);
    });

    test('testing math add function', () => {
        expect(mathModule.testAdd(1, 2)).toBe(3);
    });

    test('testing multiply function', () => {
        expect(mathModule.testMultiply(2, 4)).toBe(8);
    });

    test('testing divide by zero', () => {
        expect(mathModule.testDivide(1 , 0)).toBeNull();
    });

    test('testing divide with real values', () => {
        expect(mathModule.testDivide(8, 2)).toBe(4);
    });
})