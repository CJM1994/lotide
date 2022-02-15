const countOnly = require('../countOnly');
assert = require('chai').assert;

describe('#COUNTONLY', () => {
  it('Should count Jason x1, and Fang x2', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    expected = { Jason: 1, Fang: 2 };
    actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(actual, expected);

  })

})