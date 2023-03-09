const findingFirstNonRepeatChar = (str) => {
  let copyStr = str;
  copyStr = copyStr.toLowerCase();
  console.log(str)
  console.log(copyStr)
  let result = '';
  let isRepeated = false;
  let i = 0;
  let j = 0;
  while (i < copyStr.length && !isRepeated) {
    j = i + 1;
    while (j < copyStr.length && !isRepeated) {
      if (copyStr.charAt(i) == str.charAt(j)) {
        isRepeated = true;
      } else {
        j++;
      }
    }
    if (!isRepeated) {
      result = str.charAt(i);
      i = str.length;
    } else {
      isRepeated = false;
    }
    i++;
  }

  return result;
};

module.exports = findingFirstNonRepeatChar;
