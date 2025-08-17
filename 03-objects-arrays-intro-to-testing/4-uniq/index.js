/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (typeof arr == "undefined") {
    return [];
  }
  const uniqs = new Set();
  for (let el of arr) {
    uniqs.add(el);
  }
  return Array.from(uniqs);
}
