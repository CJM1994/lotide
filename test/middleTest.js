const middle = require('../middle');
const assert = require('chai').assert;

describe('#MIDDLE', () => {

  it('middle([1, 2, 3, 4, 5]) === [3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })

  it('middle([1, 2, 3, 4, 5, 6]) === [3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })

  it('middle([3]) === []', () => {
    assert.deepEqual(middle([3]), []);
  })

  it('middle([3, 2]) === []', () => {
    assert.deepEqual(middle([3, 2]), []);
  })

})