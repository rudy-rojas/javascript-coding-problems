const calculatingRepeatedCharacters = require('./CalculatingRepeatedCharacters.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(calculatingRepeatedCharacters(input)).toEqual(result);
  });
};

describe(`Calculating repeated characters Test`, () => {
  const input01 = 'hello world';
  const result01 = { l: 3, o: 2 };
  testing(input01, result01);

  const input02 = 'bookkeeper';
  const result02 = { o: 2, k: 2, e: 3 };
  testing(input02, result02);
});
