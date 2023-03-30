const testXOR = (value1, value2) => {
  console.log(`${value1} XOR ${value2} = ${value1 ^ value2? true: false}`)
}

const valueA01 = true;
const valueA02 = true;
const valueA03 = false;
const valueA04 = false;

const valueB01 = true;
const valueB02 = false;
const valueB03 = true;
const valueB04 = false;

testXOR(valueA01, valueB01)
testXOR(valueA02, valueB02)
testXOR(valueA03, valueB03)
testXOR(valueA04, valueB04)