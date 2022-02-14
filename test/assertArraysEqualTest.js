const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // Should match
assertArraysEqual([1, 2, 4, 5], [1, 2, 3, 4, 5]); // Should not match
assertArraysEqual([1, 2, 3, 5, 5], [1, 2, 3, 4, 5]); // Should not match
assertArraysEqual([1, 2, 3, 4, '5'], [1, 2, 3, 4, 5]); // Should not match