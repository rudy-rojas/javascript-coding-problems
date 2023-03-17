const removeCharacters = (str, charToRemove) =>
  str.split('').reduce((acc, el) => (el != charToRemove ? acc + el : acc), '');

module.exports = removeCharacters;
