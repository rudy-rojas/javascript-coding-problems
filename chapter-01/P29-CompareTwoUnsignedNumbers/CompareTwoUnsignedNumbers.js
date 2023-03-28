const compareSigned = (value01, value02) => {
  let result = 0;
  if (value01 == 0 && value02 > 0) {
    result = -1;
  } else if (value01 > 0 && value02 == 0) {
    result = 1;
  } else if (value01 == 0 && value02 < 0) {
    result = 1;
  } else if (value01 < 0 && value02 == 0) {
    result = -1;
  } else if (value01 < 0 && value02 > 0) {
    result = -1;
  } else if (value01 > 0 && value02 < 0) {
    result = 1;
  }
  return result;
};

const compareUnsigned = (value01, value02) => {
  let result = 0;
  if (value01 == 0 && value02 > 0) {
    result = 1;
  } else if (value01 > 0 && value02 == 0) {
    result = 1;
  } else if (value01 == 0 && value02 < 0) {
    result = -1;
  } else if (value01 < 0 && value02 == 0) {
    result = 1;
  } else if (value01 < 0 && value02 > 0) {
    result = 1;
  } else if (value01 > 0 && value02 < 0) {
    result = -1;
  }

  return result;
};

module.export = {compareSigned, compareUnsigned};
