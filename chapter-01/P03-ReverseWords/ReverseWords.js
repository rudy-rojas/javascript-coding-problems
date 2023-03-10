const reverseType01 = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
};

const reverseType02 = (str) => {
  const words = str.split(' ');
  const reversedWords = words.reverse();
  const reversedStr = words.join(' ');
  return reversedStr;
};
const reversing = (str) => {
  return { type01: reverseType01(str), type02: reverseType02(str) };
};

const input = 'Write a program that reverses words of a given string.';
console.log(reverse(input));
console.log(reverse2(input));

module.exports = { reverse, reverse2 };
