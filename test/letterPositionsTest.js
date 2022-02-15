const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

let test = {
  l: [0],
  i: [1, 10],
  g: [2],
  h: [3, 5],
  t: [4, 12],
  o: [6, 16],
  u: [7, 17],
  s: [8, 18],
  e: [9, 14, 19],
}

describe('#LETTER POSITIONS', () => {
  it('letterPositions("lighthouse")["l"] === [0]', () => {
    assert.deepEqual((letterPositions('lighthouse')['l']), test.l);
  })
  it('letterPositions("lighthouse")["h"] === [3, 5]', () => {
    assert.deepEqual((letterPositions('lighthouse')['h']), test.h);
  })
  it('letterPositions("hello")["l"] === [2, 3]', () => {
    assert.deepEqual((letterPositions('hello')['l']), [2, 3]);
  })
})