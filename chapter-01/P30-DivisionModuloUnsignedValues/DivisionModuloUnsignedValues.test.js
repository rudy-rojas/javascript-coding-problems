const {
  divideUnsigned,
  remainderUnsigned,
} = require('./DivisionModuloUnsignedValues');
const testingDivisionUnsigned = (input01, input02, result) => {
  it(`${input01} / ${input02} should be ${result}`, () => {
    expect(divideUnsigned(input01, input02)).toEqual(result);
  });
};
const testingModuloUnsigned = (input01, input02, result) => {
  it(`${input01} % ${input02} should be ${result}`, () => {
    expect(remainderUnsigned(input01, input02)).toEqual(result);
  });
};

describe(`Division and Modulo Unsigned Values TEST`, () => {
  let numA = 123;
  let numB = -123;
  let resultDiv01 = 0;
  let resultDiv02 = 34918432;
  let resultMod01 = 123;
  let resultMod02 = 37;
  testingDivisionUnsigned(numA, numB, resultDiv01);
  testingDivisionUnsigned(numB, numA, resultDiv02);
  testingModuloUnsigned(numA, numB, resultMod01);
  testingModuloUnsigned(numB, numA, resultMod02);

  numA = 10;
  numB = -1;
  resultDiv01 = 0;
  resultDiv02 = 429496729;
  resultMod01 = 10;
  resultMod02 = 5;
  testingDivisionUnsigned(numA, numB, resultDiv01);
  testingDivisionUnsigned(numB, numA, resultDiv02);
  testingModuloUnsigned(numA, numB, resultMod01);
  testingModuloUnsigned(numB, numA, resultMod02);

  numA = 10;
  numB = 1;
  resultDiv01 = 10;
  resultDiv02 = 0;
  resultMod01 = 0;
  resultMod02 = 1;
  testingDivisionUnsigned(numA, numB, resultDiv01);
  testingDivisionUnsigned(numB, numA, resultDiv02);
  testingModuloUnsigned(numA, numB, resultMod01);
  testingModuloUnsigned(numB, numA, resultMod02);
});
