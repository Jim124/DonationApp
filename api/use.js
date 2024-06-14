import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import app from '../config/firebaseConfig';

export const createUser = async (fullName, email, password) => {
  try {
    const auth = getAuth(app);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    // await user.user.updateProfile({ displayName: fullName });
    console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-alreay-in-use') {
      return { error: 'The email you entered is already in use.' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Please enter a valid email address' };
    }
    return { error: 'Something went wrong with your request.' };
  }
};
