export default function getLastKey(nanny, state) {
  let lastKey = {};
  switch (state.filter) {
    case 'less-than-10':
      lastKey = { value: Number(nanny.price_per_hour), id: nanny.id };
      break;
    case 'greater-than-10':
      lastKey = { value: Number(nanny.price_per_hour), id: nanny.id };
      break;
    case 'popular':
      lastKey = { value: Number(nanny.rating), id: nanny.id };
      break;
    case 'not-popular':
      lastKey = { value: Number(nanny.rating), id: nanny.id };
      break;
    default:
      lastKey = { value: nanny.name, id: nanny.id };
      break;
  }
  return lastKey;
}
