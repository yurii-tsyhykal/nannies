import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const registerNewUser = async newUserData => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      newUserData.email,
      newUserData.password
    );
    const user = userCredential.user;
    console.log(userCredential);
    console.log(userCredential.user);
    await updateProfile(user, { displayName: newUserData.name });

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }
};
