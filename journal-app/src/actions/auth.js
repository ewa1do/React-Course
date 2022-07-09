import {
  auth,
  googleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from '../firebase/firebaseConfig.js';

import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';

export const startLoginEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(login(user.uid, user.displayName));

      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
    }
  };
};

export const startRegisterWithEmailPasswordAndName = (
  email,
  password,
  name
) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: name,
      });

      dispatch(login(user.uid, user.displayName));
    } catch (e) {
      console.log(e);
    }
  };
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then(async ({ user }) => {
  //     await updateProfile(user, {
  //       displayName: name,
  //     });

  //     dispatch(login(user.uid, user.displayName));
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    const { user } = await signInWithPopup(
      auth,
      googleAuthProvider
    );

    dispatch(login(user.uid, user.displayName));
  };

  // return (dispatch) => {
  //   signInWithPopup(auth, googleAuthProvider).then(
  //     ({ user }) => {
  //       // console.log(user);
  //       dispatch(login(user.uid, user.displayName));
  //     }
  //   );
  // };
};

export const startLogoutFromFirebase = () => {
  return async (dispatch) => {
    await signOut(auth);

    dispatch(logout());
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};
