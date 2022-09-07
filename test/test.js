/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const { assert } = require('chai');

const factorial = require('../factorialtest');

describe('returns factorial of a number', () => {
  it('factorial(0) = 1', () => {
    assert.equal(factorial(0), 1);
  });

  it('factorial(1) = 1', () => {
    assert.equal(factorial(1), 1);
  });

  it('factorial(3) = 6', () => {
    assert.equal(factorial(3), 6);
  });
  it('factorial(4) = 6', () => {
    assert.equal(factorial(4), 24);
  });
  it('factorial(5) = 8', () => {
    assert.equal(factorial(5), 120);
  });
  it('factorial(9) = 362,880', () => {
    assert.equal(factorial(9), 362880);
    console.log('----------------------');
  });
});
