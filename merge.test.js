const merge = require('./merge');

describe('merge test', () => {
  const a = {
    a: 1,
    b: 2,
    c: 3,
  };
  const b = {
    d: 4,
    e: 5,
    j: 6,
  };
  const expected = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    j: 6,
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
  test('Empty second parameter with simple object', () => {
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
  test('Empty first parameter with simple object', () => {
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
  test('Simple Merge with func but no collision', () => {
    expect(merge(a, b, multiply)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    nest1: {
      a: 5,
    },
  };
  const b = {
    nest2: {
      a: 5,
    },
  };
  const expected = {
    nest1: {
      a: 5,
    },
    nest2: {
      a: 5,
    },
  };
  const sum = (x, y) => x + y;
  test('Merge no collision nested object', () => {
    expect(merge(a, b, sum)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    nest1: {
      a: 5,
    },
  };
  const b = {
    nest1: {
      a: 5,
    },
  };
  const expected = {
    nest1: {
      a: 10,
    },
  };
  const sum = (x, y) => x + y;
  test('Collision in nested object with func', () => {
    expect(merge(a, b, sum)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    nest1: {
      a: 5,
    },
  };
  const b = {
    nest1: {
      a: 5,
    },
  };
  const expected = {
    nest1: {
      a: 5,
    },
  };
  test('Collision in nested object without func', () => {
    expect(merge(a, b)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const b = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const expected = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  test('Collision in crazy nested object without func', () => {
    expect(merge(a, b)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const b = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const expected = {
    nest1: {
      a: 10,
      nest2: {
        a: 10,
        nest3: {
          a: 10,
        },
      },
    },
  };
  const sum = (x, y) => x + y;
  test('Collision in crazy nested object with func', () => {
    expect(merge(a, b, sum)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {};
  const b = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const expected = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const sum = (x, y) => x + y;
  test('Empty first parameter with complicated object', () => {
    expect(merge(a, b, sum)).toEqual(expected);
  });
});

describe('merge test', () => {
  const a = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const b = {};
  const expected = {
    nest1: {
      a: 5,
      nest2: {
        a: 5,
        nest3: {
          a: 5,
        },
      },
    },
  };
  const sum = (x, y) => x + y;
  test('Empty second parameter with complicated object', () => {
    expect(merge(a, b, sum)).toEqual(expected);
  });
});
