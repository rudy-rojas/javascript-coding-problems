const removeWhiteSpaces = require('./RemoveWhiteSpacesFromString.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(removeWhiteSpaces(input)).toEqual(result);
  });
};

describe(`Remove White Spaces From String Test`, () => {
  testing(`Hello world!!!`, `Helloworld!!!`);
  testing(
    `Aute tempor reprehenderit elit elit excepteur laborum.`,
    `Autetemporreprehenderitelitelitexcepteurlaborum.`
  );
  testing(
    `Ipsum esse reprehenderit voluptate sunt minim officia elit tempor.`,
    `Ipsumessereprehenderitvoluptatesuntminimofficiaelittempor.`
  );
  testing(``, ``);
  testing(`a`,`a`)
});
