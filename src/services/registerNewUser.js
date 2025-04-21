import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const registerNewUser = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });
    return {
      username: user.displayName,
      uid: user.uid,
    };
  } catch (error) {
    throw error.code;
  }
};
