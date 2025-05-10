import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { store } from '../redux/store';
import { clearUser, setUser } from '../redux/auth/slice';
import { getFavorites } from '../redux/favorites/operations';

export const initAuthListener = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      store.dispatch(
        setUser({
          username: user.displayName,
          uid: user.uid,
        })
      );
      store.dispatch(getFavorites({ uid: user.uid }));
    } else store.dispatch(clearUser());
  });
};
