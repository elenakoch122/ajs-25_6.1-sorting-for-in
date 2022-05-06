export default function sortByProps(obj, order) {
  const result = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result.push({ key: prop, value: obj[prop] });
    }
  }

  result.sort((a, b) => (a.key > b.key ? 1 : -1));

  order.forEach((itemOrder, idxOrder) => {
    result.forEach((itemResult, idxResult) => {
      if (itemResult.key === itemOrder) {
        result.splice(idxResult, 1);
        result.splice(idxOrder, 0, itemResult);
      }
    });
  });

  return result;
}
