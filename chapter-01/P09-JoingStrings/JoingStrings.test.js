const joingStrings = require('./JoingStrings.js');

const testing = (input, delimiter, result) => {
  it(`${input} with delimiter ${delimiter} should be ${result}`, () => {
    expect(joingStrings(input, delimiter)).toEqual(result);
  });
};

describe(`Joing Strings with a delimiter Test`, () => {
  testing(['This', 'is', 'very', 'easy'], '-', 'This-is-very-easy');
  testing(['Cat', 'Dog', 'Fish', 'Turtle'], '/', 'Cat/Dog/Fish/Turtle');
  testing([], '', '');
  testing([], '/', '');
});
``;
