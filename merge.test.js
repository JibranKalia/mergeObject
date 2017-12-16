const merge = require('./merge');

describe('merge test', () => {
  const a = {
    x: 3,
  };
  const b = {
    y: 3,
  };
  const expected = {
    x: 3,
    y: 3,
  };
  test('simple non collision merge', () => {
    expect(merge(a, b)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    x: 3,
  };
  const b = {};
  const expected = {
    x: 3,
  };
  test('Empty second parameter', () => {
    expect(merge(a, b)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {};
  const b = {
    y: 3,
  };
  const expected = {
    y: 3,
  };
  test('Empty first parameter', () => {
    expect(merge(a, b)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    x: 4,
    y: 3,
  };
  const b = {
    y: 3,
  };
  const expected = {
    x: 4,
    y: 6,
  };
  const sum = (x, y) => x + y;
  test('Simple Merge with sum', () => {
    expect(merge(a, b, sum)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    x: 4,
    y: 3,
  };
  const b = {
    z: 3,
  };
  const expected = {
    x: 4,
    y: 3,
    z: 3,
  };
  const multiply = (x, y) => x * y;
  test('Simple Merge with func but function is not applicable', () => {
    expect(merge(a, b, multiply)).toEqual(expected);
  });
});
