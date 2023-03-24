const identLine = (str, n, tabSize = 2) => {
  // n is ident size
  return `${'\t'.repeat(n)}${str}`.replace(/\t/g, ' '.repeat(tabSize));
};

const autoIdent = (str) => {
  str = str.trim();
  const array = str.split('\n');
  let topLine = Math.ceil(array.length / 2);
  let j = -1;
  for (let i = 0; i < array.length; i++) {
    if (i < topLine) {
      j++;
    } else {
      j--; 
    }
    array[i] = identLine(array[i], j);
  }
  return array.join('\n');
};

// const input = `
// <html>
// <body>
// <h1>
// Hi JavaScript
// </h1>
// <body>
// </html>
// `;
// console.log(autoIdent(input))

module.exports = autoIdent;
