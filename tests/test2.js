const fetchWithRetry = require('../task2/solution');

(async () => {
  try {
    const data = await fetchWithRetry(
      'https://jsonplaceholder.typicode.com/users',
      3
    );
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();   