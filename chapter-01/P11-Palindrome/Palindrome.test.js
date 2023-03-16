const isPalindrome = require('./Palindrome.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(isPalindrome(input)).toEqual(result);
  });
};

describe(`Check if a string is a palindrome`, () => {
  testing('civic', true);
  testing('redder', true);
  testing('Hello', false);
});
