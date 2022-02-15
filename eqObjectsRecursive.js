const eqArrays = require('./eqArrays');

const eqObjectsRecursive = function (object1, object2) {

  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);

  if (keyArray1.length !== keyArray2.length) return false;

  for (const key of keyArray1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    }
    else { if (object1[key] !== object2[key]) return false };
  }

  return true;

}

module.exports = eqObjectsRecursive;