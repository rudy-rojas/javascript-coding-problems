const cleanString = (str) =>
  str.toLowerCase().split(' ').join('').split('\n').join('');

const isAnagram = (str1, str2) => {
  let sentence01 = cleanString(str1);
  let sentence02 = cleanString(str2);
  console.log(sentence01)
  console.log(sentence02)
  
  let result = true;
  if (sentence01.length != sentence02.length) {
    result = false;
  } else {
    let arraySentence02 = sentence02.split('');
    let i = 0;
    let j = 0;
    let founded = false;
    while (i < sentence01.length && result) {
      j = 0;
      founded = false;
      while (j < arraySentence02.length && !founded) {
        if (sentence01.charAt(i) == arraySentence02[j]) {
          arraySentence02.splice(j, 1);
          founded = true;
        } else {
          j++;
        }
      }
      if (!founded) {
        result = false;
      }
      i++;
    }
  }

  return result;
};

module.exports = isAnagram;
