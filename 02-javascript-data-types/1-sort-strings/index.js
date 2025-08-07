/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  /*const collator = new Intl.Collator("ru-RU", {
    sensitivity: "base",
    usage: "sort",
  });

  return [...arr].sort((a, b) => {
    let result = collator.compare(a, b);

    if (param === "desc") {
      result *= -1;
    }
    //Возвращаем результат
    return result;
  });
  */
  const arrSortLocate = arr.slice().sort((a, b) => {
    const comparisonResult = a.localeCompare(b, undefined, {
      sensitivity: "base",
      usage: "sort",
    });

    if (param === "asc") {
      return comparisonResult;
    } else {
      return -comparisonResult;
    }
  });

  return arrSortLocate.sort((a, b) => {
    const isUpperA = a !== a.toLowerCase();
    const isUpperB = b !== b.toLowerCase();
    if (a.toLowerCase() !== b.toLowerCase()) {
      return 0;
    }
    if (isUpperA && !isUpperB) {
      return -1;
    }
    if (!isUpperA && isUpperB) {
      return +1;
    }
  });
}
