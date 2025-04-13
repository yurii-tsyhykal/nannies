import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const authLogInUser = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return {
      username: user.displayName,
      uid: user.uid,
    };
  } catch (error) {
    throw error.code;
  }
};
