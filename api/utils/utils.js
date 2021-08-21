const bucketize = (n, items) => {
  let [i, curr, result] = [0, [], []];
  while (i < items.length) {
    if (i === n) {
      i = 0;
      result.push([...curr]);
      curr = [];
    }
    if (items[i] !== null && items[i] !== undefined) {
      curr.push(items[i]);
    }
    i++;
  }
  result.push(curr);
  return result;
};

module.exports = {
  bucketize,
};
