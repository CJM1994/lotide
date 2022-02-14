const middle = function (array) {
  if (array.length <= 2)
    return [];
  else if (array.length % 2 !== 0)
    return [array[(array.length - 1) / 2]];
  else if (array.length % 2 === 0)
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
};

module.exports = middle;