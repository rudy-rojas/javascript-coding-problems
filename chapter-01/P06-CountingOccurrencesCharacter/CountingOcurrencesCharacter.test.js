const countOcurrencesCharacter = require('./CountingOcurrencesCharacter.js');

const testing = (input, char, result) => {
  it(`${input} with ${char} should return ${result}`, () => {
    expect(countOcurrencesCharacter(input, char)).toEqual(result);
  });
};

describe(`Counting Ocurrences Character Test`, () => {
  testing('Hello world', 'l', 3);
  testing('Commodo tempor ad amet amet exercitation et non.', 'o', 6);
  testing('Commodo tempor ad amet amet exercitation et non.', '', 0);
});
