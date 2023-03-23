const stringMultiline01 = `
This is a multiline string
that spans across multiple lines.
You can use template literals
to declare such strings.
`;

const stringMultiline02 =
  'This is a multiline string\
that spans across multiple lines.\
You can use template literals\
to declare such strings.';

const stringMultiline03 =
  'This is a multiline string' +
  'that spans across multiple lines.' +
  'You can use template literals' +
  'to declare such strings.';



  console.log('String01', stringMultiline01);
/*
String01 
This is a multiline string
that spans across multiple lines.
You can use template literals
to declare such strings.
*/


  console.log('String02', stringMultiline02);
  // String02 This is a multiline stringthat spans across multiple lines.You can use template literalsto declare such strings.
  
  console.log('String03', stringMultiline03);
  // String02 This is a multiline stringthat spans across multiple lines.You can use template literalsto declare such strings.

  if(stringMultiline01 === stringMultiline03) { // In this case return true
    console.log('String Multiline 2 and 3 are equals')
  }