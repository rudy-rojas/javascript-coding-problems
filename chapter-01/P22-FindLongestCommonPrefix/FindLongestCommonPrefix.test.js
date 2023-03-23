const findPrefix = require('./FindLongestCommonPrefix');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(findPrefix(input)).toEqual(result);
  });
};

describe(`Find longest Common prefix Test`, () => {
  testing(['apple', 'appetite', 'application', 'appendix'], 'app');
  testing(['preheat', 'preview', 'prevent', 'prepare'], 'pre');
  testing(['apple', 'pineaple', 'watermelon', 'orange'], '');
  testing(['flower', 'flow', 'flight'], 'fl');
});
