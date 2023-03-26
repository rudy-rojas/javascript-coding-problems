// Method 02
const getMinMax = (numbers) => {
  numbers.sort((a, b) => a - b);
  return { min: numbers[0], max: numbers[numbers.length - 1] };
};

// Method 01
// const getMinMax = (numbers) => {
//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);
//   return { min: min, max: max };
// };

module.exports = getMinMax;