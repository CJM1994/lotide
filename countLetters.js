const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else return console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = function(sentence) {
  let parsedSentence = sentence.split(' ').join('');
  const returnObject = {};
  for (const letter of parsedSentence) {
    if (!returnObject[letter]) returnObject[letter] = 1;
    else returnObject[letter]++;
  }
  return returnObject;
};

console.log(countLetters('This is an example.'));