const findPrefix = (array) => {
  let prefix = '';
  let isEqual = true;
  let i = 0;
  let minWord = array.reduce((acc, el) => (acc.length <= el.length ? acc : el));
  let j = 0;
  while (i < minWord.length && isEqual) {
    j = 0;
    while (j < array.length && isEqual) {
      if (minWord.charAt(i) !== array[j].charAt(i)) {
        isEqual = false;
      }
      j++;
    }
    if (isEqual) {
      prefix += minWord.charAt(i);
    }
    i++;
  }

  return prefix;
};

// const input = ['apple', 'appetite', 'application', 'appendix'];
// console.log(findPrefix(input));

module.exports = findPrefix;
