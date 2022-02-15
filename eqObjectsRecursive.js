const eqObjectsRecursive = function (object1, object2) {

  if (Array.isArray(object1) || Array.isArray(object2)) return false; // Returns false for now if an array
  if (object1 === object2) return true;

  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);

  if (keyArray1.length !== keyArray2.length) return false;

  for (let key of keyArray1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) return false; // Returns false for now if array
    if (!eqObjectsRecursive(object1[key], object2[key])) return false;
  }

  return true;

}

module.exports = eqObjectsRecursive;

// Can't handle arrays like the other function yet, need to make a recursive array checker first 
// and then will add that to this