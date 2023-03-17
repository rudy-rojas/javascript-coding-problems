const removeCharacters = require('./RemoveGivenCharacters.js');

const testing = (str, charToRemove, result) => {
  it(`Removing ${charToRemove} on ${str} should be ${result}`, () => {
    expect(removeCharacters(str, charToRemove)).toEqual(result);
  });
};

describe(`Remove given Characters Test`, () => {
  testing('Brendan Eich', 'n', 'Breda Eich');
  testing(
    'The Quick Qrown Qox Qumps Over The Lazy Dog.',
    ' ',
    'TheQuickQrownQoxQumpsOverTheLazyDog.'
  );
});
