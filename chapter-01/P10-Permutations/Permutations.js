const generatePermutations = (str) => {
  const result = [];

  const permute = (currentStr, remainingStr) => {
    if (remainingStr.length == 0) {
      result.push(currentStr);
    } else {
      for (let i = 0; i < remainingStr.length; i++) {
        const nextStr = currentStr + remainingStr[i];
        const newRemainingStr =
          remainingStr.slice(0, i) + remainingStr.slice(i + 1);
        permute(nextStr, newRemainingStr);
      }
    }
  };

  permute('', str);

  return result;
};

module.exports = generatePermutations;
// const str = "abc";
// const permutations = generatePermutations(str);
// console.log(permutations); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    
// method 02
// const generatePermutations = (str) => {
//   let result = [];
//   let asArray = str.split('');
//   for (let i = 0; i < str.length; i++) {
//     asArray = str.split('');
//     for (let j = 0; j < str.length; j++) {
//       if (i != j) {
//         let aux = asArray[i];
//         asArray[i] = asArray[j];
//         asArray[j] = aux;
//       }
//       if (!result.includes(asArray.join(''))) {
//         result.push(asArray.join(''));
//       }
//     }
//   }

//   for (let i = str.length - 1; i >= 0; i--) {
//     asArray = str.split('');
//     for (let j = str.length - 1; j >= 0; j--) {
//       if (i != j) {
//         let aux = asArray[i];
//         asArray[i] = asArray[j];
//         asArray[j] = aux;
//       }
//       if (!result.includes(asArray.join(''))) {
//         result.push(asArray.join(''));
//       }
//     }
//   }

//   return result;
// };

// module.exports = generatePermutations;

// const input= ''
// console.log(generatePermutations(input).length)
