const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
    return true;
  } else {
    console.log(`🛑 Assertion Failed: [${array1}] !== [${array2}]`);
    return false;
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const eqObjects = function (object1, object2) {

  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);

  console.log(object1, object2);

  console.log('Equal Number of Keys in Object?');
  assertEqual(keyArray1.length, keyArray2.length);
  if (keyArray1.length !== keyArray2.length) return false;

  console.log('Equal Key Value Pairs?');
  for (const key of keyArray1) {
    if (Array.isArray(object1[key])) {
      if (!assertArraysEqual(object1[key], object2[key])) {
        return false;
      }
    } else {
      assertEqual(object1[key], object2[key]);
      if (object1[key] !== object2[key]) return false;
    }
  }

  return true;

};

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ OBJECTS EQUAL: [${inspect(object1)}] === [${inspect(object2)}]`);
    return true;
  } else {
    console.log(`🛑🛑🛑 OBJECTS NOT EQUAL: [${inspect(object1)}] !== [${inspect(object2)}]`);
    return false;
  }
};

// TESTS

console.log('-----TEST ONE-----');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

console.log('-----TEST TWO-----');
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

console.log('-----TEST THREE-----');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

console.log('-----TEST FOUR-----');
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false