const findKey = require("./findKey");

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else return console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const findKeyByValue = function (object, value) {
  const keyArray = Object.keys(object);
  for (const key of keyArray) {
    if (object[key] === value) return key;
  }
}

module.exports = findKeyByValue;

//TESTS
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);