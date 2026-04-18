const flattenDeep = require('../task3/solution');

const obj = {
  user: {
    name: 'Ana',
    scores: [10, 20],
    meta: {
      active: true
    }
  }
};

console.log(flattenDeep(obj));