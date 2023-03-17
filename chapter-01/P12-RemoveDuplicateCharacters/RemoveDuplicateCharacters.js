const removeDuplicateCharacters = (str) => {
  let result = [];
  let arr = str.split('');
  for (let char of arr) {
    if (!result.includes(char)) {
      result.push(char);
    }
  }
  return result.join('');
};

module.exports = removeDuplicateCharacters;
