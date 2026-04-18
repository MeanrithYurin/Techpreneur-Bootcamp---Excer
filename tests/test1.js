const groupAndAggregate = require('../task1/solution');

const data = [
  { region: 'Asia', product: 'Widget A', revenue: 4200, orders: 14 },
  { region: 'Asia', product: 'Widget B', revenue: 1800, orders: 6 },
  { region: 'Asia', product: 'Widget C', revenue: 3300, orders: 11 },
  { region: 'EU', product: 'Widget A', revenue: 3100, orders: 10 },
  { region: 'EU', product: 'Widget C', revenue: 5400, orders: 18 },
  { region: 'EU', product: 'Widget D', revenue: 920, orders: 4 }
];

console.log(groupAndAggregate(data));