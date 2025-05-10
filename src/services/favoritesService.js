import { get, ref, runTransaction } from 'firebase/database';
import { db } from './firebaseConfig';
import createNanniesQuery from '../helpers/createNanniesQuery';

export const getFavoritesNannies = async (
  uid,
  filter,
  lastKey,
  limit,
  items
) => {
  if (!uid) throw new Error('No uid provided');

  const favRef = ref(db, `users/${uid}/favorites`);

  const nannies = await get(createNanniesQuery(favRef, filter, lastKey, limit));
  if (nannies.exists()) {
    let data = [];
    nannies.forEach(childSnapshot => {
      data.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });

    if (filter === 'z-to-a' || filter === 'popular') {
      data.reverse();
      if (items.length > 0 && lastKey) {
        data = data.filter(exists => exists.id !== lastKey.id);
      }
    }
    return data;
  }
  return [];
};

export const toggleFavorite = async (uid, nanny) => {
  const favRef = ref(db, `users/${uid}/favorites`);
  try {
    const transactionResult = await runTransaction(favRef, currentData => {
      let currentFavorites = Array.isArray(currentData) ? [...currentData] : [];
      const index = currentFavorites.findIndex(item => item.id === nanny.id);

      if (index > -1) {
        currentFavorites.splice(index, 1);
      } else {
        currentFavorites.push(nanny);
      }
      return currentFavorites;
    });

    if (transactionResult.committed) {
      const updatedFavorites = transactionResult.snapshot.val() || [];
      return updatedFavorites;
    } else {
      throw new Error('Favorite toggle transaction was aborted.');
    }
  } catch (error) {
    console.error('Error toggling favorite with transaction:', error);
    throw error;
  }
};
