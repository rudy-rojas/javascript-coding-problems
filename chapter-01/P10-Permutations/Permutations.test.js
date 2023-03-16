const generatePermutations = require('./Permutations.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(generatePermutations(input)).toEqual(result);
  });
};

describe(`Generating all permutations Test`, () => {
  testing('abc', ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  testing('Rudy', [
    'Rudy',
    'Ruyd',
    'Rduy',
    'Rdyu',
    'Ryud',
    'Rydu',
    'uRdy',
    'uRyd',
    'udRy',
    'udyR',
    'uyRd',
    'uydR',
    'dRuy',
    'dRyu',
    'duRy',
    'duyR',
    'dyRu',
    'dyuR',
    'yRud',
    'yRdu',
    'yuRd',
    'yudR',
    'ydRu',
    'yduR',
  ]);
});
