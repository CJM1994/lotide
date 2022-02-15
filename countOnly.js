const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) results[item] = 1;
      else if (results[item]) results[item]++;
    }
  }
  return results;
};

module.exports = countOnly;