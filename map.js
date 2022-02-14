const words = ["ground", "control", "to", "major", "tom"];

const map = function (arrayToMap, callbackFunction) {
  const results = [];
  for (const element of arrayToMap) {
    results.push(callbackFunction(element));
  }
  return results;
}

module.exports = map;