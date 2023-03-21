const countStringInString = require('./CountStringInString.js');

const testing = (input, word, result) => {
  it(`The word "${word}" in "${input}" should be return "${result}"`, () => {
    expect(countStringInString(input, word)).toEqual(result);
  });
};

describe(`Count String in String Test`, () => {
  const input01 =
    'All we have to decide is what to do with the time that is given us.';
  const word01 = 'is';
  const result01 = 2;
  testing(input01, word01, result01);

  const input02 =
    'The syntax of the JavaScript language is structured around ' +
    ' the use of the curly brace { } notation, which defines the beginning and' +
    ' end of code blocks, as well as the use of the semicolon ; to separate ' +
    'statements within those blocks. The flexibility of the language allows' +
    ' developers to use the same code across different platforms and devices, ' +
    'making it an ideal tool for creating responsive and interactive ' +
    'web applications that can be accessed by the widest possible audience.';
  const word02 = 'the';
  const result02 = 11;
  testing(input02, word02, result02);

  const input03 = 'Cillum do laboris labore ex.';
  const word03 = 'cat';
  const result03 = 0;
  testing(input03, word03, result03);
});
