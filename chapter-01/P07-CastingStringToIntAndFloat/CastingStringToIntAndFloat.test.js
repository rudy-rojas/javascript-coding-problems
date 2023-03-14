const { stringToInt, stringToFloat } = require('./CastingStringToIntAndFloat');

const testingInt = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(stringToInt(input)).toEqual(result);
  });
};

const testingFloat = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(stringToFloat(input)).toEqual(result);
  });
};

describe(`Casting String to Int test`, () => {
  testingInt('1000', 1000);
  testingInt('123', 123);
  testingInt('0', 0);
  testingInt('-100', -100);
});

describe(`Casting String to Float test`, () => {
  testingFloat('123.12', 123.12);
  testingFloat('456.789', 456.789);
  testingFloat('0.0', 0.0);
});
