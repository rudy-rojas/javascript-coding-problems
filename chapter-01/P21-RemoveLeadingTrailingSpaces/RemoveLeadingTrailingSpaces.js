let text01 = `

  hello world  

`;

let text02 = '    JavaScript \
is very funny\
.     ';


text01 = text01.trim();
text02 = text02.trim();
console.log(`-${text01}-`) // -hello world-
console.log(`-${text02}-`) // -JavaScript is very funny.-