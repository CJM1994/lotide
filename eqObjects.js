const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const eqObjects = function (object1, object2) {

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

module.exports = eqObjects;

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));