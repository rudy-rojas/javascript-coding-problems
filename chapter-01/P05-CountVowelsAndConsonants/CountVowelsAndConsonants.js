const countVowelsConsonants = (str) => {
  let result = { vowels: 0, consonants: 0 };
  for (let char of str) {
    if (/[a-z0-9A-Z]/.test(char)) {
      if (/[aeiou]/.test(char)) {
        result['vowels']++;
      } else {
        result['consonants']++;
      }
    }
  }
  return result;
};

module.exports = countVowelsConsonants;