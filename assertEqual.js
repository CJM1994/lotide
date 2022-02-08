const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else return console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

// TEST CODE
assertEqual('lighthouse labs', 'bootcamp');
assertEqual('lighthouse labs', 'lighthouse labs');
assertEqual(1, 2);
assertEqual(1, 1);