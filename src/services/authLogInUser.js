import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const authLogInUser = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  console.log('user', user);

  return {
    username: user.displayName,
    uid: user.uid,
  };
};
