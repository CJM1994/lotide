const tail = require('../tail');
const assert = require('chai').assert;

describe('#TAIL', () => {

  it('tail([1, 2, 3, 4, 5]) === [2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  })

  it('["Hello", "Lighthouse", "Labs"] === ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })

  it('tail(["Hello", 3, 4]) === [3, 4]', () => {
    assert.deepEqual(tail(["Hello", 3, 4]), [3, 4]);
  })

})