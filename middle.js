const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅ Arrays match');
  } else console.log('🛑 Arrays do not match');
};

const middle = function(array) {
  if (array.length <= 1)
    return [];
  else if (array.length % 2 !== 0)
    return [array[(array.length - 1) / 2]];
  else if (array.length % 2 === 0)
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
};

console.log(middle([3]));
assertArraysEqual(middle([3]), []);
console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);