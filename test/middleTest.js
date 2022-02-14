const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([3]));
assertArraysEqual(middle([3]), []);
console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);