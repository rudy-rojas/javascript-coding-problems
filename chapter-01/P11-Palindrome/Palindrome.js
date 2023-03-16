// Method 02
const isPalindrome = (str) =>
  str === str.toLowerCase().split('').reverse().join('');

// Method 01
// const isPalindrome = (str) => {
//   let limit = parseInt(str.length / 2);
//   let i = 0;
//   let j = str.length - 1;
//   let result = true;
//   while (i < limit && result) {
//     if (str.charAt(i) != str.charAt(j)) {
//       result = false;
//     } else {
//       i++;
//       j--;
//     }
//   }
//   return result;
// };

module.exports = isPalindrome;
