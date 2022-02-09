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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

assertArraysEqual(without([1, 1, 2, 2, 3, 3], [2, 3]), [1, 1]); // should be ===
assertArraysEqual(without([1, 1, 'f', 2, 3, 3], [2, 3, 'f']), [1, 1]); // should be ===
assertArraysEqual(without([4, 1, 2, 2, 3, 3], [2, 3, 'f']), [4, 1]); // should be ===
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']); // should be ===
assertArraysEqual(without(['1', '2', '3'], [1, 2, 3]), ['1', '2', '3']); // should be ===