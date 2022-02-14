const assert = require('chai').assert;
const head = require('../head')

describe('#HEAD', () => {

  it('should return the first number in an array of numbers', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  })

  it('should return the first string in an array of strings', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })

  it('should return undefined for an empty array', () => {
    assert.strictEqual(head([]), undefined);
  })

  it('should return the only element in an array with one element', () => {
    assert.strictEqual(head(['one']), 'one');
  })

})