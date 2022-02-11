
const findKey = function (object, callback) {
  const keyArray = Object.keys(object);
  for (const key in object) {
    if (callback(object[key])) return key;
  }
}

// console.log(
//   findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri": { stars: 3 },
//     "noma": { stars: 2 },
//     "elBulli": { stars: 3 },
//     "Ora": { stars: 2 },
//     "Akelarre": { stars: 3 }
//   }, x => x.stars === 2)
// )
