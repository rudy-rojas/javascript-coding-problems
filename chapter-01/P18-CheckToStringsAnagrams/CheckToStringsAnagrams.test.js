const isAnagram = require('./CheckToStringsAnagrams');

const testing = (str01, str02, result) => {
  it(`"${str01}" with "${str02}" should be "${result}"`, () => {
    expect(isAnagram(str01, str02)).toEqual(result);
  });
};

describe(`Check To Strings Anagrams Test`, () => {
  const str01Original = 'The black cat';
  const str01Anagram = 'cahb lct ket\n a';
  const result01 = true;
  testing(str01Original, str01Anagram, result01);

  const str02Original = 'vscode is an ide';
  const str02Anagram = 'soes iedc an vd iX';
  const result02 = false;
  testing(str02Original, str02Anagram, result02);

  const str03Original = `My name's is Rudy`;
  const str03Anagram = `sen rm y'ym udi\nas`;
  const result03 = true;
  testing(str03Original, str03Anagram, result03);
});
