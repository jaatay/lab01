'use strict'

const greetingModule = require('../greet');

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