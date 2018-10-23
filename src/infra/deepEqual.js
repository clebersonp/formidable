const deepEqual = (a, b) => {
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    const aKeys = Object.keys(a);
    return aKeys.reduce((acc, key) => {
      if (!deepEqual(a[key], b[key]) || acc === false) return false;

      return true;
    }, true);
  }

  return a === b;
};

export default deepEqual;
