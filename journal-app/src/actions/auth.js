import {
  auth,
  googleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from '../firebase/firebaseConfig.js';

import { types } from '../types/types';

export const startLoginEmailAndPassword = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'Peter'));
    }, 3500);
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

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
