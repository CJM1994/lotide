const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 'f', 3], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 8], [1, 2, 3]), true); // => should FAIL