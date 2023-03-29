const parseUnsignedInt = (num) => {
  let result = num;
  if (num < 0) {
    result = Math.pow(2, 32) - Math.abs(num);
  }
  return result;
};

const divideUnsigned = (divident, divisor) => {
  const unsignedDivident = parseUnsignedInt(divident);
  const unsignedDivisor = parseUnsignedInt(divisor);
  return Math.floor(unsignedDivident / unsignedDivisor);
};

const remainderUnsigned = (divident, divisor) => {
  const unsignedDivident = parseUnsignedInt(divident);
  const unsignedDivisor = parseUnsignedInt(divisor);
  return unsignedDivident % unsignedDivisor;
};

const divisionSigned = (divident, divisor) => Math.floor(divident / divisor);
const remainderSigned = (divident, divisor) => divident % divisor;

const getAllDivisions = (numA, numB) => {
  let result = ``;
  result += `DIVISION   [numA=${numA}, numB=${numB}]\n`;
  result += `--------------------------------------\n`;
  result += `Division signed numA/NumB: ${divisionSigned(numA, numB)}\n`;
  result += `Division sigend numB/numA: ${divisionSigned(numB, numA)}\n`;
  result += `Division unsigned numA/numB: ${divideUnsigned(numA, numB)}\n`;
  result += `Division unsigned numB/numA: ${divideUnsigned(numB, numA)}\n`;
  return result;
};

const getAllModulo = (numA, numB) => {
  let result = `MODULO   [numA=${numA}, numB=${numB}]\n`;
  result += `--------------------------------------\n`;
  result += `Modulo signed numA/NumB: ${remainderSigned(numA, numB)}\n`;
  result += `Modulo sigend numB/numA: ${remainderSigned(numB, numA)}\n`;
  result += `Modulo unsigned numA/numB: ${remainderUnsigned(numA, numB)}\n`;
  result += `Modulo unsigned numB/numA: ${remainderUnsigned(numB, numA)}\n\n\n`;
  return result;
};

// let numA = 123;
// let numB = -123;
// console.log(getAllDivisions(numA, numB))
// console.log(getAllModulo(numA, numB))

// numA = 10;
// numB = -1;
// console.log(getAllDivisions(numA, numB))
// console.log(getAllModulo(numA, numB))

// numA = 10;
// numB = 1;
// console.log(getAllDivisions(numA, numB))
// console.log(getAllModulo(numA, numB))

module.exports = { divideUnsigned, remainderUnsigned };
