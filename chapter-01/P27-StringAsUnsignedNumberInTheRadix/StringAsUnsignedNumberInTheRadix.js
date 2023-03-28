const numB16 = 'a';
const radix = 16;

const numB10 = parseInt(numB16, radix);
console.log(numB10) // A(16) = 10 (10)

const num2B10 = 10;
const num2B16 = num2B10.toString(radix);
console.log(num2B16) // Output: a

const str = "FF";
const num = parseInt(str, radix);
console.log(num); // Output: 255


