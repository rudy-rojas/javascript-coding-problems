const countVowelsConsonants = require('./CountVowelsAndConsonants.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(countVowelsConsonants(input)).toEqual(result);
  });
};

describe(`Counting Vowels and Consonants Test`, () => {
  testing(`Hi there, what's up!`, { vowels: 5, consonants: 9 });
  testing(
    'Irure veniam esse cupidatat commodo incididunt elit consectetur ullamco dolore.',
    { vowels: 30, consonants: 39 }
  );
});
