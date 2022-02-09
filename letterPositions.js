const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅ Arrays match');
  } else console.log('🛑 Arrays do not match');
};

const letterPosition = function (string) {
  const results = {};
  string = string.split(' ').join('');
  for (let i = 0; i < string.length; i++) {
    if (!results[string[i]]) results[string[i]] = [i];
    else results[string[i]].push(i);
  }
  console.log(results);
  return results;
};


// TESTING
let test = {
  l: [0],
  i: [1, 10],
  g: [2],
  h: [3, 5, 13, 15],
  t: [4, 12],
  o: [6, 16],
  u: [7, 17],
  s: [8, 18],
  e: [9, 14, 19],
  n: [11]
}

assertArraysEqual((letterPosition('hello'))['l'], [2, 3]);
assertArraysEqual((letterPosition('lighthouse in the house'))['h'], test.h);