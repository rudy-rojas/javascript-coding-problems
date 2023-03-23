const repeatString = require('./RepeatStringNTimes');
const testing = (str, n, result) => {
  it(`"${str}", "${n}" times, should be "${result}"`, () => {
    expect(repeatString(str, n)).toEqual(result);
  });
};

describe(`Repeat String N Times Test`, () => {
  testing('hi', 5, 'hihihihihi');
  testing('*', 10, '**********');
  testing('', 10, '');
});
