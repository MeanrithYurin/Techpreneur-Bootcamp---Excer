function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Status code: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(`Failed to fetch '${url}' after ${attempt} attempts`);
      }

      const delay = 100 * Math.pow(2, attempt - 1);
      await sleep(delay);
    }
  }
}

module.exports = fetchWithRetry;