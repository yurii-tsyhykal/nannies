import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { store } from '../redux/store';
import { clearUser, setUser } from '../redux/auth/slice';

export const initAuthListener = () => {
  onAuthStateChanged(auth, user => {
    console.log(user);

    if (user) {
      store.dispatch(
        setUser({
          username: user.displayName,
          uid: user.uid,
        })
      );
    } else store.dispatch(clearUser());
  });
};
