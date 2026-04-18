function flattenDeep(obj, prefix = '') {
  const result = {};

  function flatten(value, currentKey) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        result[currentKey] = null;
        return;
      }

      for (let i = 0; i < value.length; i++) {
        flatten(value[i], `${currentKey}[${i}]`);
      }
      return;
    }

    if (value !== null && typeof value === 'object') {
      const keys = Object.keys(value);

      if (keys.length === 0) {
        result[currentKey] = null;
        return;
      }

      for (const key of keys) {
        const newKey = currentKey ? `${currentKey}.${key}` : key;
        flatten(value[key], newKey);
      }
      return;
    }

    result[currentKey] = value;
  }

  flatten(obj, prefix);
  return result;
}

module.exports = flattenDeep;