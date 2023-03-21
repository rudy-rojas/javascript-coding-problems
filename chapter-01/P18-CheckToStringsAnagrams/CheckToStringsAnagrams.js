const cleanString = (str) =>
  str.toLowerCase().split(' ').join('').split('\n').join('');

const isAnagram = (str1, str2) => {
  let sentence01 = cleanString(str1);
  let sentence02 = cleanString(str2);
  let arrSentence02 = sentence02.split('');
  let i = 0;
  let result = true;
  let j = 0;
  while (i < sentence01.length && result) {
    j = 0;
    while (j < sentence02.length && result) {
      if (sentence01.charAt(i) == sentence02(j)) {
        arrSentence02.splice(j, 1);
      } else {
        j++;
      }
    }
    if (j == sentence02.length) {
      result = false;
    }
    i++;
  }

  return result;
};

module.exports = isAnagram;
