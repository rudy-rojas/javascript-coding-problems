const getMinMax = require('./MinMaxTwoNumbers');

const testing = (input, result) => {
  it(`${input}, should be ${JSON.stringify(result)}`, () => {
    expect(getMinMax(input)).toEqual(result);
  });
};

describe(`Get Min Max Two numbers, Test`, () => {
  testing([8, 4], { min: 4, max: 8 });
  testing([3.1416, 8.8888], { min: 3.1416, max: 8.8888 });
  testing([123, 123], { min: 123, max: 123 });
});
