import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const logOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
