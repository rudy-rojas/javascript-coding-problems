const removeDuplicateCharacters = require('./RemoveDuplicateCharacters.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(removeDuplicateCharacters(input)).toEqual(result);
  });
};

describe(`Removing duplicate characters Test`, () => {
  testing('programming', 'progamin');
  testing('123 4 123 123 123 123 T', '123 4T');
  testing('Javascript is very funny!', 'Javscript eyfun!');
  testing('', '');
  testing('WWWWWWWWWWWWWWWWW', 'W');
});
