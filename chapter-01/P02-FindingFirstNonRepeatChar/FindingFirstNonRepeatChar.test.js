const findingFirstNonRepeatChar = require('./FindingFirstNonRepeatChar.js');
const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(findingFirstNonRepeatChar(input)).toEqual(result);
  });
};

describe(`Finding the first non-repeat character`, () => {
  testing('hello world', 'h');
  testing(
    'Aute aliquip fugiat eu nostrud anim deserunt laborum deserunt.',
    'q'
  );
  testing('', '');
  testing('WRITE A PROGRAM THAT CHECKS WHETHER THE GIVEN STRING', 'W');
});
