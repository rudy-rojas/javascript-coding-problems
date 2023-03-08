const calculatingRepeatedCharacters = (str) => {
const hola = 'hello world';
  let copyStr = str.split('');
  let result = {};
  for (let char of copyStr) {
    if (char in result) { //  if (result.hasOwnProperty(char)) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  result = Object.entries(result).filter((el) => el[1] > 1);
  result = result.reduce((acc, el) => {
    acc[el[0]] = el[1];
    return acc;
  }, {});
  return result;
};

module.exports = calculatingRepeatedCharacters;
