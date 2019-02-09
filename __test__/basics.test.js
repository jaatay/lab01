'use strict'

const greetingModule = require('../greet');

describe('#greet.js', () => {

    test('testing the test', () => {
        expect(greetingModule.testGreeting()).toBeTruthy();
    });

    test('tests null value for non string entry', () => {
        expect(greetingModule.requiredGreeting(42)).toBeNull();
    })

    test('tests greeting string value', () => {
        expect(greetingModule.requiredGreeting('Jesse')).toBeTruthy();
    })
})