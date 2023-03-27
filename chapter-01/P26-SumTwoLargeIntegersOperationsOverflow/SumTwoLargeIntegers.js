const minNumber = Number.MIN_VALUE; // 5e-324
const maxNumber = Number.MAX_VALUE; // 1.7976931348623157e+308

console.log(minNumber);
console.log(maxNumber);

const minSafeNumber = Number.MIN_SAFE_INTEGER; // -9007199254740991
const maxSafeNumber = Number.MAX_SAFE_INTEGER; // 9007199254740991

console.log(minSafeNumber);
console.log(maxSafeNumber);

const sum = maxNumber + maxSafeNumber;
console.log(sum); // 1.7976931348623157e+308

if (sum === maxNumber) { // In this case are equals // return true
  console.log(`they're equals`); // showing this message
} else {
  console.log(`they aren't equals`);
}

const sum2 = maxSafeNumber+maxSafeNumber; //18014398509481982
console.log(sum2)