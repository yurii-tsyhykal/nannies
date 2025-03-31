import {
  endAt,
  endBefore,
  limitToFirst,
  limitToLast,
  orderByChild,
  query,
  startAfter,
  startAt,
} from 'firebase/database';

export default function createNanniesQuery(
  nanniesRef,
  filter,
  lastKey = null,
  limit
) {
  let q;
  console.log(limit);

  switch (filter) {
    case 'a-to-z':
      if (lastKey) {
        q = query(
          nanniesRef,
          orderByChild('name'),
          startAfter(lastKey.value, String(lastKey.id)),
          limitToFirst(limit)
        );
      } else {
        q = query(
          nanniesRef,
          orderByChild('name'),
          startAt('A'),
          limitToFirst(limit)
        );
      }
      break;
    case 'z-to-a':
      if (lastKey) {
        q = query(
          nanniesRef,
          orderByChild('name'),
          endBefore(lastKey.value, String(lastKey.id)),
          limitToLast(limit + 1)
        );
      } else {
        q = query(
          nanniesRef,
          orderByChild('name'),
          endAt('Z'),
          limitToLast(limit)
        );
      }
      break;
    case 'less-than-10':
      if (lastKey) {
        q = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          startAfter(lastKey.value, String(lastKey.id)),
          endAt(10),
          limitToFirst(limit)
        );
      } else {
        q = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          endAt(10),
          limitToFirst(limit)
        );
      }
      break;
    case 'greater-than-10':
      if (lastKey) {
        q = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          startAfter(lastKey.value, String(lastKey.id)),
          limitToFirst(limit)
        );
      } else {
        q = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          startAt(11),
          limitToFirst(limit)
        );
      }
      break;
    case 'popular':
      if (lastKey) {
        q = query(
          nanniesRef,
          orderByChild('rating'),
          endBefore(lastKey.value, String(lastKey.id)),
          limitToLast(limit + 1)
        );
      } else {
        q = query(
          nanniesRef,
          orderByChild('rating'),
          endAt(5),
          limitToLast(limit)
        );
      }
      break;
    case 'not-popular':
      if (lastKey) {
        q = query(
          nanniesRef,
          orderByChild('rating'),
          startAt(lastKey.value, String(lastKey.id)),
          limitToFirst(limit)
        );
      } else {
        q = query(
          nanniesRef,
          orderByChild('rating'),
          startAt(0),
          limitToFirst(limit)
        );
      }
      break;
    default:
      q = query(nanniesRef);
      break;
  }
  return q;
}
