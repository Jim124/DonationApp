import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import app from '../config/firebaseConfig';

export const createUser = async (fullName, email, password) => {
  try {
    const auth = getAuth(app);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: fullName });
    return user;
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'The email you entered is already in use.' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Please enter a valid email address' };
    }
    return { error: 'Something went wrong with your request.' };
  }
};

export const loginUser = async (email, password) => {
  try {
    const auth = getAuth(app);
    const response = await signInWithEmailAndPassword(auth, email, password);
    const token = response.user.stsTokenManager.accessToken;
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return { status: false, error: 'Please enter a correct password' };
    } else if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error:
          'The email you entered does not exist. please create a new account. ',
      };
    } else if (error.code === 'auth/invalid-credential') {
      return {
        status: false,
        error:
          'The email you entered does not exist. please create a new account.',
      };
    }
    return { status: false, error: 'somthing went wrong' };
  }
};
export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};
