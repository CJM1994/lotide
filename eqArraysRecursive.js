const eqArraysRecursive = function (arr1, arr2) {

  if (typeof arr1 !== typeof arr2) return false;
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== typeof arr2[i]) return false;
    if (Array.isArray(arr1[i])) eqArraysRecursive(arr1[i], arr2[i]);
    else if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

module.exports = eqArraysRecursive;

console.log(eqArraysRecursive([[2, 3], [4]], [[2, 3], 4]));