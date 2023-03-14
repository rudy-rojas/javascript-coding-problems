const countOcurrencesCharacter = (str, char) => {
  return str.split('').reduce((acc, el) => (el === char ? acc + 1 : acc), 0);
};

// const input = 'Hello world';
// const char = 'l';
// console.log(countOcurrencesCharacter(input, char));

module.exports = countOcurrencesCharacter;
