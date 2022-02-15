const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe('#EQ OBJECTS', () => {
  it('{ a: "1", b: "2" } === { b: "2", a: "1" } should return true', () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  })
  it('{ a: "1", b: "2" } === { a: "1", b: "2", c: "3" } should return false', () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  })
  it('{ c: "1", d: ["2", 3] } === { d: ["2", 3], c: "1" } should return true', () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  })
  it('{ c: "1", d: ["2", 3] } === { c: "1", d: ["2", 3, 4] } should return false', () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  })
})