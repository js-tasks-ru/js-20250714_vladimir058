/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const keys = path.split(".");

  return (object) => {
    let result = object;
    for (const key of keys) {
      if (
        !result ||
        typeof result !== "object" ||
        !Object.getOwnPropertyNames(result).includes(key)
      ) {
        return;
      }
      result = result[key];
    }
    return result;
  };
}
