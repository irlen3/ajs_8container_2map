export default function orderByProperties(obj, [key1, key2]) {
  let addProp = {};
  const result = [];
  const massiveRest = [];

  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      if (property === key1) {
        addProp = { key: property, value: obj[property] };
        result.push(addProp);
      }

      if (property === key2) {
        addProp = { key: property, value: obj[property] };
        result.push(addProp);
      }

      if (property !== key1 && property !== key2) {
        addProp = { key: property, value: obj[property] };
        massiveRest.push(addProp);
      }
    }
  }

  function sortArray(x, y) {
    if (x.key > y.key) return 1;
    return -1;
  }

  massiveRest.sort(sortArray);
  for (let i = 0; i < massiveRest.length; i += 1) {
    result.push(massiveRest[i]);
  }
  return result;
}
