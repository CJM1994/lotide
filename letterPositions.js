const letterPositions = function (string) {
  const results = {};
  string = string.split(' ').join('');
  for (let i = 0; i < string.length; i++) {
    if (!results[string[i]]) results[string[i]] = [i];
    else results[string[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;