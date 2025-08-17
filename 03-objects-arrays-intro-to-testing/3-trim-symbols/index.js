/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (typeof size == "undefined") {
    return string;
  }
  const startCount = 0;
  let resultString = "";
  let symbolCurrent = "";
  let symbolCount = startCount;
  if (size <= 0) {
    return resultString;
  }
  for (let i = 0; i < string.length; i++) {
    if (symbolCurrent == string[i]) {
      symbolCount++;
    } else {
      symbolCurrent = string[i];
      symbolCount = 1;
    }

    if (symbolCount <= size) {
      resultString += string[i];
    }
  }

  return resultString;
}
