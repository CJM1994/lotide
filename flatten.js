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

const flatten = function(array) {
  const flattenedArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const subElement of element) {
        flattenedArray.push(subElement);
      }
    } else flattenedArray.push(element);
  }
  return flattenedArray;
};

// TEST
const unflattened = [1, 2, [3, 4], 5, [6]];
console.log(unflattened);
console.log(flatten(unflattened));
assertArraysEqual(flatten(unflattened), [1, 2, 3, 4, 5, 6]);