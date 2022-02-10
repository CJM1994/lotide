const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else return console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);

  console.log(object1, object2);

  console.log('Equal Number of Keys in Object?');
  assertEqual(keyArray1.length, keyArray2.length);
  if (keyArray1.length !== keyArray2.length) return false;

  console.log('Equal Key Value Pairs?')
  for (const key of keyArray1) {
    assertEqual(object1[key], object2[key]);
    if (object1[key] !== object2[key]) return false;
  }

}

// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false