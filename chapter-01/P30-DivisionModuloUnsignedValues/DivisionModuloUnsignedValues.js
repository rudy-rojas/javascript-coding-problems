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

const minValue = Number.MAX_VALUE;
const maxValue = -Number.MAX_VALUE;
console.log(divideUnsigned(minValue, maxValue));
console.log(divideUnsigned(maxValue, minValue));

console.log(remainderUnsigned(minValue, maxValue));
console.log(remainderUnsigned(maxValue, minValue));