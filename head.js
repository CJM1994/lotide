const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else return console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(['one']), 'one');