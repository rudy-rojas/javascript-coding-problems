const findMostFrequentChar = require('./FindCharWithMostAppearances.js');

const testing = (input, result) => {
  it(`Given the string "${input}" the most repeated character should be ${result.character} with ${result.ocurrences} repetitions.`, () => {
    expect(findMostFrequentChar(input)).toEqual(result);
  });
};

describe(`Find character with most appearances Test`, () => {
  testing('Hello world', { character: 'l', ocurrences: 3 });
  testing(
    `My high school, the Illinois Mathematics and Science Academy, showed me that anything is possible and that you're never too young to think big. At 15, I worked as a computer programmer at the Fermi National Accelerator Laboratory, or Fermilab. After graduating, I attended Stanford for a degree in economics and computer science.`,
    { character: 'e', ocurrences: 29 }
  );
  testing('', { character: '', ocurrences: 0 });
});
