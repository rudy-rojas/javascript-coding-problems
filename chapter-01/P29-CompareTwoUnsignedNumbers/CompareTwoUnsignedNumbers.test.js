const {
  compareSigned,
  compareUnsigned,
} = require('./CompareTwoUnsignedNumbers.js');

const testingSigned = (input01, input02, result) => {
  it(`Signed ints ${input01}, ${input02} should be ${result}`, () => {
    expect(compareSigned(input01, input02)).toEqual(result);
  });
};

const testingUnsigned = (input01, input02, result) => {
  it(`Unsigned ints ${input01}, ${input02} should be ${result}`, () => {
    expect(compareUnsigned(input01, input02)).toEqual(result);
  });
};

describe(`Comparing Signed Test`, () => {
  testingSigned(0, 0, 0);
  testingUnsigned(0, 0, 0);
  testingSigned(-Number.MAX_VALUE, 0, -1);
  testingUnsigned(-Number.MAX_VALUE, 0, 1);
  testingSigned(0, -Number.MAX_VALUE, 1);
  testingUnsigned(0, -Number.MAX_VALUE, -1);
  testingSigned(0, Number.MAX_VALUE, -1);
  testingUnsigned(0, Number.MAX_VALUE, -1);
  testingSigned(Number.MAX_VALUE, 0, 1);
  testingUnsigned(Number.MAX_VALUE, 0, 1);
  testingSigned(-Number.MAX_VALUE, Number.MAX_VALUE, -1);
  testingUnsigned(-Number.MAX_VALUE, Number.MAX_VALUE, 1);
  testingSigned(Number.MAX_VALUE, -Number.MAX_VALUE, 1);
  testingUnsigned(Number.MAX_VALUE, -Number.MAX_VALUE, -1);
});
