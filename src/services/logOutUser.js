import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { store } from '../redux/store';
import { clearFavState } from '../redux/favorites/slice';
import { clearNannyState } from '../redux/nannies/slice';

export const logOutUser = async () => {
  try {
    await signOut(auth);
    store.dispatch(clearFavState());
    store.dispatch(clearNannyState());
  } catch (error) {
    console.log(error);
  }
};
