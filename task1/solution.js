function groupAndAggregate(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return {};
  }

  const result = {};

  for (const row of data) {
    const region = row.region;
    const product = row.product;
    const revenue = row.revenue;
    const orders = row.orders;

    if (!result[region]) {
      result[region] = {
        totalRevenue: 0,
        totalOrders: 0,
        products: {}
      };
    }

    result[region].totalRevenue += revenue;
    result[region].totalOrders += orders;

    if (!result[region].products[product]) {
      result[region].products[product] = 0;
    }

    result[region].products[product] += revenue;
  }

  const finalAnswer = {};

  for (const region in result) {
    let topProduct = '';
    let topRevenue = 0;

    for (const product in result[region].products) {
      if (result[region].products[product] > topRevenue) {
        topRevenue = result[region].products[product];
        topProduct = product;
      }
    }

    finalAnswer[region] = {
      totalRevenue: result[region].totalRevenue,
      avgOrderValue: Number(
        (result[region].totalRevenue / result[region].totalOrders).toFixed(2)
      ),
      topProduct: topProduct
    };
  }

  return finalAnswer;
}

module.exports = groupAndAggregate;