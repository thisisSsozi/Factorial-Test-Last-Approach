const {assert} = require('chai');
const {it, describe} = require('mocha');
const Factorial = require('../factorialtest');
const factorial = require('./factorialtest');

describe('Factorial', ()=>{
    it('Factorial (0) = 1', () =>{
        assert.equal(factorial(0), 1);
    })
});