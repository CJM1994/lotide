const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe('#FIND KEY BY VALUE', () => {
  it('"The Wire" should return "drama"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  })
  it('"That 70s Show" should return undefined', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'That 70s Show'), undefined);
  })
})