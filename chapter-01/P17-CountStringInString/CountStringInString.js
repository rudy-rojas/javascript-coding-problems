const countStringInString = (str, word) => {
  word = word.toLowerCase();
  str = str.toLowerCase();
  let array = str.split(' ');
  return array.reduce((acc, el) => (el === word ? acc + 1 : acc), 0);
};

module.exports = countStringInString;
