export const filteringArray = array => {
  if (array.length === 0) [];
  return [...new Map(array.map(item => [item.id, item])).values()];
};
