const identLine = require('./StringIdentation');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(identLine(input)).toEqual(result);
  });
};

describe(`String Identation Test`, () => {
  const input = `
<html>
<body>
<h1>
Hi JavaScript
</h1>
<body>
</html>
`;

  const result = 
`<html>
  <body>
    <h1>
      Hi JavaScript
    </h1>
  <body>
</html>`;

  testing(input, result);
});
