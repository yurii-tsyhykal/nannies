import { get, ref, set } from 'firebase/database';
import { db } from './firebaseConfig';
import { snapshotToArray } from '../utils/snapshotToArray';
import createNanniesQuery from '../helpers/createNanniesQuery';

export const getFavoritesNannies = async (
  uid,
  filter,
  lastKey,
  limit,
  items
) => {
  if (!uid) throw new Error('No uid provided');
  console.log('items', lastKey);

  const favRef = ref(db, `users/${uid}/favorites`);

  const nannies = await get(createNanniesQuery(favRef, filter, lastKey, limit));
  if (nannies.exists()) {
    let data = [];
    data = snapshotToArray(nannies);
    if (
      (filter === 'z-to-a' || filter === 'popular') &&
      items.length > 0 &&
      lastKey
    ) {
      data = data.filter(exists => exists.id !== lastKey.id);
    }
    return data;
  }
  return [];
};

export const toggleFavorite = async (uid, nanny) => {
  const favRef = ref(db, `users/${uid}/favorites`);
  let favoritesArray = await getFavoritesNannies(uid);
  const exists = favoritesArray.some(item => item.id === nanny.id);
  if (exists) {
    favoritesArray = favoritesArray.filter(item => item.id !== nanny.id);
  } else {
    favoritesArray.push(nanny);
  }
  await set(favRef, favoritesArray);
  return favoritesArray;
};
