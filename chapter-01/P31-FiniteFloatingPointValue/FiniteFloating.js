
const num = 2.3;
console.log(num, Number.isFinite(num)) // output: 2.3 true

const num2 = num/0;
console.log(num2, Number.isFinite(num2)) // output:Infinity false

const num3 = 0/0;
console.log(num3, Number.isFinite(num3)) // output: NaN false