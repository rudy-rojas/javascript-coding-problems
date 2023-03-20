const sortArrayByLength = require('./SortArrayStringsByLength.js');
const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(sortArrayByLength(input)).toEqual(result);
  });
};

describe(`Sort Array String By Length Test`, () => {
  testing(
    ['Pineapple', 'Orange', 'Pear', 'Grapefruit', 'Kiwi'],
    ['Pear', 'Kiwi', 'Orange', 'Pineapple', 'Grapefruit']
  );
  testing(
    [
      'Elephath',
      'Dog',
      'Cat',
      'Lion',
      'Tiger',
      'Giraffe',
      'Monkey',
      'Kangaroo',
      'Zebra',
      'Dolphin',
    ],
    [
      'Dog',
      'Cat',
      'Lion',
      'Tiger',
      'Zebra',
      'Monkey',
      'Giraffe',
      'Dolphin',
      'Elephath',
      'Kangaroo',
    ]
  );
  testing([],[])
});
