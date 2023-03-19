const findMostFrequentChar = (str) => {
  let result = {};
  for (let char of str) {
    if (char != ' ') {
      if (char in result) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  let arrayResult = Object.entries(result);
  arrayResult.sort((a, b) => a[1] - b[1]);
  return {
    character:
      arrayResult.length > 0 ? arrayResult[arrayResult.length - 1][0] : '',
    ocurrences:
      arrayResult.length > 0 ? arrayResult[arrayResult.length - 1][1] : 0,
  };
};

module.exports = findMostFrequentChar;
