/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj !== "object") {
    return;
  }

  const invArray = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      invArray[obj[key]] = key;
    }
  }

  return invArray;
}
