const eqObjectsRecursive = require('../eqObjectsRecursive');
const assert = require('chai').assert;

describe('EQ OBJECTS RECURSIVE', () => {

  it('This nested object should return true', () => {
    assert.strictEqual(eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  })

  it('This nested object should return false', () => {
    assert.strictEqual(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  })

  it('This nested object should return false', () => {
    assert.strictEqual(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  })

})