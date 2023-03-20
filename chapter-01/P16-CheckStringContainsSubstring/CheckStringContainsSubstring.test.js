const checkSubstring = require('./CheckStringContainsSubstring.js');

const testing = (input, toFind, result) => {
  it(`${input} with ${toFind} should be return ${result}`, () => {
    expect(checkSubstring(input, toFind)).toEqual(result);
  });
};

describe(`Check String Contains Substring test`, () => {
  const input01 = 'Proident ullamco qui amet voluptate.';
  const toFind01 = 'amet';
  const result01 = true;

  testing(input01, toFind01, result01);

  const input02 =
    'Consectetur ut aliqua laboris eu adipisicing consequat pariatur quis ad labore do aliqua do.';
  const toFind02 = 'the cat';
  const result02 = false;
  testing(input02, toFind02, result02);

  const input03 = 'JavaScript is very funny';
  const toFind03 = 'VERY FUNNY';
  const result03 = true;
  testing(input03, toFind03, result03);
});
