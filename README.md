# lab01

![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 01
[![Build Status](https://travis-ci.com/jaatay/lab01.svg?branch=master)](https://travis-ci.com/jaatay/lab01)

### Author: Jesse Atay

### Links and Resources
* [repo](https://github.com/jaatay/lab01)
* [front-end](http://xyz.com) (when applicable)

### Modules
#### `greet.js`
##### testGreeting() -> true
##### testGreeting() -> true

#### `arithmetic.js`

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* Tests conducted via node using Jest test package. Branch rule testing build via Travis, linked to repo. All branches required passing build prior to merge into Master branch.

* Assertions

//GREET MODULE TESTS
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
