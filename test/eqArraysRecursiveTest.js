const assert = require('chai').assert;
const eqArraysRecursive = require('../eqArraysRecursive');

describe('EQ ARRAYS RECURSIVE', () => {

  it('Equal: [[2, 3], [4]], [[2, 3], [4]]', () => {
    assert.strictEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]]), true);
  })

  it('Not Equal: [[2, 3], [4]], [[2, 3], 4]', () => {
    assert.strictEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], 4]), false);
  })

  it('Equal: [[2, 3], [4, [1, 2, [1, 2, 3], 4, 5], 5]], [[2, 3], [4, [1, 2, [1, 2, 3], 4, 5], 5]]', () => {
    assert.strictEqual(eqArraysRecursive([[2, 3], [4, [1, 2, [1, 2, 3], 4, 5], 5]], [[2, 3], [4, [1, 2, [1, 2, 3], 4, 5], 5]]), true);
  })

})