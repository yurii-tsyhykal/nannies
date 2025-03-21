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
    console.log(userCredential);
    console.log(userCredential.user);
    await updateProfile(user, { displayName: name });

    return {
      username: user.displayName,
      uid: user.uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    throw error;
  }
};
