const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('EQ ARRAYS', () => {
  it('Two empty arrays should return true', () => {
    assert.strictEqual(eqArrays([], []), true);
  })

  it('[1, 2, 3], [1, 2, 3] should return true', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })

  it('[1, 2, 3, 4], [1, 2, 3] should return false', () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  })

  it('[1, "f", 3], [1, 2, 3] should return false', () => {
    assert.strictEqual(eqArrays([1, 'f', 3], [1, 2, 3]), false);
  })

})